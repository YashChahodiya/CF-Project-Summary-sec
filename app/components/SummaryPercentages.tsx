import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/pro-solid-svg-icons";

const SummaryPercentages: React.FC = () => {
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
          return val + "%"; // Format tooltips to show percentage
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
    { name: "Invoiced to Date", data: [70, 850, 46, 58] },
    { name: "Total Project Amount", data: [99, 97, 97, 97] },
  ];

  return (
    <>
      <div className="flex gap-2  items-center  ">
        <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faSackDollar} />
        </div>
        <span className="font-semibold text-xl">Summary Percentages</span>
      </div>
      {!ReactApexChart ? (
        <p>Loading...</p>
      ) : (
        <ReactApexChart
          type="bar"
          options={options}
          series={series}
          height="300"
        />
      )}
    </>
  );
};

export default SummaryPercentages;
