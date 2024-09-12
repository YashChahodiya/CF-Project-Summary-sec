import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import { faSackDollar } from "@fortawesome/pro-solid-svg-icons";
import CustomIcon from "./CustomIcon";
import Skeleton from "./Skeletons/skeleton";

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

  // console.log("qwqwqwqw", data);
  // const [ReactApexChart, setReactApexChart] = useState<any>();

  // FOR REMIX
  // useEffect(() => {
  //   import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  // }, []);

  // HTML
  const ReactApexChart = require("react-apexcharts").default;

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
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return `${val.toFixed(0)}%`;
        },
      },
      min: 0,
      max: 1000,
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
  const series = [
    {
      name: "Invoiced to Date",
      data: [
        Number(all_item_total?.total?.commited_total) || 0,
        Number(all_item_total?.total?.actual_total) || 0,
        Number(all_item_total?.labor?.actual_total) || 0,
        Number(billing_vs_actual?.amount_invoiced / 100) || 0,
      ],
    },
    {
      name: "Total Project Amount",
      data: [
        Number(all_item_total?.unassigned?.estimated_total) || 0,
        Number(all_item_total?.total?.estimated_total) || 0,
        Number(all_item_total?.labor?.estimated_total) || 0,
        Number(billing_vs_actual?.original_contract_amount / 100) || 0,
      ],
    },
  ];

  return (
    <div className="h-full">
      <CustomIcon
        icon={faSackDollar}
        label="Summary Percentages"
        bgColor="#FEF6E5"
        color="#F8AB07"
        className="text-base"
      />

      {!ReactApexChart ? (
        <div className="mt-5">
          <ChartSkeleton />
        </div>
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

const ChartSkeleton = () => {
  return (
    <div className="relative h-64 ">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="w-10 h-2" />
        ))}
      </div>

      {/* Chart bars */}
      <div className="absolute left-14  right-0 top-0 bottom-8 flex justify-between items-end">
        {[10, 16, 60, 20, 40].map((height, index) => (
          <div key={index} className="flex flex-col items-center">
            <Skeleton className={`w-12 mb-1 h-${height}`} />
            <Skeleton className="w-16 h-2" />
          </div>
        ))}
      </div>
    </div>
  );
};
