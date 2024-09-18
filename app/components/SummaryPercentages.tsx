// import React, { Suspense } from "react";
// import { ApexOptions } from "apexcharts";
// import { faSackDollar } from "@fortawesome/pro-solid-svg-icons";
// import CustomIcon from "./CustomIcon";

// const ReactApexChart = require("react-apexcharts").default;

// const SummaryPercentages = ({ data }: any) => {
//   const billing_vs_actual = data?.billing_vs_actual || {};
//   const all_item_total = data?.all_item_total || {};

//   // Function to format currency
//   const formatCurrency = (value: any) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(value);
//   };

//   // Sanitize and validate data before using in chart
//   const commitedTotal = Number(all_item_total?.total?.commited_total) || 0;
//   const actualTotal = Number(all_item_total?.total?.actual_total) || 0;
//   const laborActualTotal = Number(all_item_total?.labor?.actual_total) || 0;
//   const amountInvoiced =
//     (Number(billing_vs_actual?.amount_invoiced) || 0) / 100;
//   const estimatedTotal = Number(all_item_total?.total?.estimated_total) || 0;
//   const originalContractAmount =
//     (Number(billing_vs_actual?.original_contract_amount) || 0) / 100;

//   const options: ApexOptions = {
//     chart: {
//       id: "chart1",
//       toolbar: {
//         show: false,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "30%",
//         dataLabels: {
//           position: "top",
//         },
//       },
//     },
//     xaxis: {
//       categories: ["Committed", "Actual", "Labor", "Invoiced"],
//     },
//     yaxis: {
//       labels: {
//         formatter: function (val: number) {
//           return `${val.toFixed(0)}%`;
//         },
//       },
//       min: 0,
//       max: 1000,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       colors: ["transparent"],
//       width: 5,
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//       y: {
//         formatter: function (val: number) {
//           return formatCurrency(Number(val));
//         },
//       },
//     },
//     colors: ["#7989A9", "#F9C75C"],
//     legend: {
//       show: false,
//       position: "top",
//     },
//   };

//   const series = [
//     {
//       name: "Invoiced to Date",
//       data: [commitedTotal, actualTotal, laborActualTotal, amountInvoiced],
//     },
//     {
//       name: "Total Project Amount",
//       data: [
//         estimatedTotal,
//         actualTotal,
//         laborActualTotal,
//         originalContractAmount,
//       ],
//     },
//   ];

//   return (
//     <div className="h-full">
//       <CustomIcon
//         icon={faSackDollar}
//         label="Summary Percentages"
//         bgColor="#FEF6E5"
//         color="#F8AB07"
//         className="text-base"
//       />

//       <Suspense fallback={<div>Loading Chart...</div>}>
//         <ReactApexChart
//           type="bar"
//           height={307}
//           options={options}
//           series={series}
//         />
//       </Suspense>
//     </div>
//   );
// };

// export default SummaryPercentages;

import React, { Suspense, useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import CustomIcon from "./CustomIcon";

const ReactApexChart = require("react-apexcharts").default;

import { faSackDollar } from "@fortawesome/pro-solid-svg-icons";

const SummaryPercentages = ({ data }: any) => {
  // const [ReactApexChart, setReactApexChart] = useState<any>();

  // useEffect(() => {
  //   import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  // }, []);

  const billing_vs_actual = data?.billing_vs_actual || {};
  const all_item_total = data?.all_item_total || {};

  // Function to format currency
  const formatCurrency = (value: any) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Sanitize and validate data before using in chart
  const commitedTotal = Number(all_item_total?.total?.commited_total) || 0;
  const actualTotal = Number(all_item_total?.total?.actual_total) || 0;
  const laborActualTotal = Number(all_item_total?.labor?.actual_total) || 0;
  const amountInvoiced =
    (Number(billing_vs_actual?.amount_invoiced) || 0) / 100;
  const estimatedTotal = Number(all_item_total?.total?.estimated_total) || 0;
  const originalContractAmount =
    (Number(billing_vs_actual?.original_contract_amount) || 0) / 100;

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
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
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
          return `${val.toFixed(0)}%`;
        },
      },
      min: 0,
      max: 1000,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ["transparent"],
      width: 5,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val: number) {
          return formatCurrency(Number(val));
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
      name: "Invoiced to Date",
      data: [commitedTotal, actualTotal, laborActualTotal, amountInvoiced],
    },
    {
      name: "Total Project Amount",
      data: [
        estimatedTotal,
        actualTotal,
        laborActualTotal,
        originalContractAmount,
      ],
    },
  ];

  if (!data) {
    console.log("<<<<<==== Data not Available ====>>>>>");
    return <div>Loading Charts</div>;
  }

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
        <>Loading...</>
      ) : (
        <Suspense fallback={<div>Loading Chart...</div>}>
          <ReactApexChart
            type="bar"
            height={307}
            options={options}
            series={series}
          />
        </Suspense>
      )}
    </div>
  );
};

export default SummaryPercentages;
