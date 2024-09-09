import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import CustomIcon from "./CustomIcon";

import { faSackDollar } from "@fortawesome/pro-solid-svg-icons";

const SummaryPercentages = ({ data }: any) => {
  const billing_vs_actual = data?.billing_vs_actual;
  const all_item_total = data?.all_item_total;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const calculatePercentage = (value: number, total: number) => {
    if (total === 0) return 0;
    return (value / total) * 100;
  };

  const [ReactApexChart, setReactApexChart] = useState<any>();

  useEffect(() => {
    import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  }, []);

  const options: ApexOptions = {
    chart: {
      id: "chart1",
      toolbar: {
        // show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        dataLabels: {
          // position: "top", // Show data labels at the top of the bars
        },
      },
    },
    dataLabels: {
      enabled: false, // Enable data labels
      formatter: function (val: number) {
        return `${val.toFixed(2)}%`; // Format data labels as percentages
      },
      style: {
        fontSize: "12px",
        colors: ["#304758"], // Customize the color of the labels
      },
    },
    xaxis: {
      categories: ["Committed", "Actual", "Labor", "Invoiced"],
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return `${val.toFixed(0)}%`; // Show percentage in Y-axis
        },
      },
      min: 0,
      max: 1000, // Max 1000% to match the example
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val: number, { seriesIndex, dataPointIndex, w }) {
          const actualVal =
            seriesIndex === 0
              ? [
                  all_item_total?.total?.commited_total,
                  all_item_total?.total?.actual_total,
                  all_item_total?.labor?.actual_total,
                  billing_vs_actual?.amount_invoiced / 100,
                ][dataPointIndex]
              : [
                  all_item_total?.unassigned?.estimated_total,
                  all_item_total?.total?.estimated_total,
                  all_item_total?.labor?.estimated_total,
                  billing_vs_actual?.original_contract_amount / 100,
                ][dataPointIndex];
          return formatCurrency(actualVal); // Show currency in tooltip
        },
      },
    },
    colors: ["#7989A9", "#F9C75C"],
    legend: {
      show: false,
      position: "top",
    },
  };

  const series = [
    {
      name: "Actual Cost",
      data: [
        calculatePercentage(
          all_item_total?.total?.commited_total,
          all_item_total?.unassigned?.estimated_total
        ),
        calculatePercentage(
          all_item_total?.total?.actual_total,
          all_item_total?.total?.estimated_total
        ),
        calculatePercentage(
          all_item_total?.labor?.actual_total,
          all_item_total?.labor?.estimated_total
        ),
        calculatePercentage(
          billing_vs_actual?.amount_invoiced / 100,
          billing_vs_actual?.original_contract_amount / 100
        ),
      ],
    },
    {
      name: "Estimated Cost",
      data: [100, 100, 100, 100], // Total estimated baseline (100%)
    },
  ];

  return (
    <div className="h-full">
      <CustomIcon icon={faSackDollar} label="Summary Percentages" />

      {!ReactApexChart ? (
        <p>Loading...</p>
      ) : (
        <ReactApexChart
          type="bar"
          height={307}
          options={options}
          series={series}
        />
      )}
    </div>
  );
};

export default SummaryPercentages;
