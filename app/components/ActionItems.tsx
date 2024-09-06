import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxCircleCheck } from "@fortawesome/pro-solid-svg-icons";

const ActionItems: React.FC = () => {
  const [ReactApexChart, setReactApexChart] = useState<any>();

  useEffect(() => {
    import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  }, []);

  const options: ApexOptions = {
    chart: {
      id: "chart1",
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: { categories: ["OPEN", "DUE", "CLOSED"] },
    colors: ["#684CC7", "#e01f35"],
    legend: {
      show: false,
      position: "top",
    },
  };

  const series = [{ data: [2, 0, 0] }, { data: [0, 2, 1] }];

  return (
    <>
      <div className="flex gap-2  items-center  ">
        <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faBoxCircleCheck} />
        </div>
        <span className="font-semibold text-xl"> Action-Items</span>
      </div>
      {!ReactApexChart ? (
        <p>Loading...</p>
      ) : (
        <ReactApexChart
          type="bar"
          options={options}
          series={series}
          height={"280"}
        />
      )}
    </>
  );
};

export default ActionItems;
