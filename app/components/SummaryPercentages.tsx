import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import { faSackDollar } from "@fortawesome/pro-solid-svg-icons";
import CustomIcon from "./CustomIcon";

const SummaryPercentages = ({ data }: any) => {
  const billing_vs_actual = data?.billing_vs_actual;
  const all_item_total = data?.all_item_total;
  console.log(data);
  const formatCurrency = (value: any) => {
    // Convert string to number, divide by 100 to get the correct decimal place

    // Format the number as currency
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  console.log("qwqwqwqw", data);
  const [ReactApexChart, setReactApexChart] = useState<any>();

  useEffect(() => {
    import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  }, []);

  const options: ApexOptions = {
    chart: {
      id: "chart1",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%", // Adjust the column width
        dataLabels: {
          position: "top", // Optional: show data labels above bars
        },
      },
    },
    xaxis: {
      categories: ["Committed", "Actual", "Labor", "Invoiced"],
    },

    dataLabels: {
      enabled: false, // Disable default data labels on the chart
    },
    stroke: {
      colors: ["transparent"],
      width: 5,
    },
    tooltip: {
      shared: true, // Show multiple series in the tooltip (as shown in the image)
      intersect: false,
      y: {
        formatter: function (val: number) {
          return formatCurrency(Number(val)); // Format tooltips to show percentage
        },
      },
    },
    colors: ["#7989A9", "#F9C75C"], // Adjust colors for bars
    legend: {
      show: false,
      position: "top",
    },
  };
  console.log(all_item_total, all_item_total?.total?.estimated_total);
  const series = [
    {
      name: "Invoiced to Date",
      data: [
        all_item_total?.total?.commited_total,
        all_item_total?.total?.actual_total,
        all_item_total?.labor?.actual_total,
        Number(billing_vs_actual?.amount_invoiced / 100),
      ],
    },
    {
      name: "Total Project Amount",
      data: [
        all_item_total?.unassigned?.estimated_total,
        all_item_total?.total?.estimated_total,
        all_item_total?.labor?.estimated_total,
        Number(billing_vs_actual?.original_contract_amount / 100),
      ],
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
