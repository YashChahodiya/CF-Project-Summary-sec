import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import CustomIcon from "./CustomIcon";

import { faBoxCircleCheck } from "@fortawesome/pro-solid-svg-icons";
import axios from "axios";

import Skeleton from "./Skeletons/skeleton";
import ReactApexChart from "react-apexcharts";

const ActionItems = () => {
  const [ReactApexChart, setReactApexChart] = useState<any>();

  const [data, setData] = useState<any>([]);

  console.log(data, "1232");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = new FormData();
        formData.append("op", "get_project_reference_detail");
        formData.append("project_id", "147534");
        formData.append("need_more_data", "0");
        formData.append("for_module_key", "");
        formData.append("version", "web");
        formData.append("from", "panel");
        formData.append("iframe_call", "0");
        formData.append("tz", "+5:30");
        formData.append("tzid", "Asia/Calcutta");
        formData.append("curr_time", "2024-08-31 15:50:38");
        formData.append("force_login", "0");
        formData.append("global_project", "");
        formData.append("user_id", "109871");
        formData.append("company_id", "829");

        const response = await axios.post(
          "https://api-cfdev.contractorforeman.net/service.php?opp=get_project_reference_detail&c=829&u=109871&p=manage_projects",
          formData
        );

        setData(response?.data?.data?.modules);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    const timeOut = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  // FOR REMIX
  useEffect(() => {
    import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  }, []);

  // HTML
  // const ReactApexChart = require("react-apexcharts").default;

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
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 10,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: { categories: ["OPEN", "DUE", "CLOSED"], tickPlacement: "on" },
    colors: ["#684CC7", "#e01f35", "#282691"],
    legend: {
      show: true,
      position: "top",
    },
    dataLabels: {
      enabled: true,
      formatter: (val: any) => (isNaN(val) ? "" : val),
    },
  };

  // invoices
  const invoices = data?.open_incomplete_item?.opnIncoInvoice[0] || {};
  const bills = data?.open_incomplete_item?.opnIncoBills[0] || {};
  const pos = data?.open_incomplete_item?.opnIncoPurchaseOrder[0] || {};

  console.log(invoices, "1");
  console.log(bills, "2");
  console.log(pos, "3");

  const cleanData = (values: any) =>
    values.map((val: any) => (isNaN(val) ? null : val));

  const series = [
    {
      name: "Invocies",
      data: [
        Number(invoices?.total_open) || 0,
        Number(invoices?.total_due) || 0,
        Number(invoices?.total_close) || 0,
      ],
    },
    {
      name: "Bills",
      data: [
        Number(bills?.total_open) || 0,
        Number(bills?.bill_count) || 0,
        Number(bills?.total_close) || 0,
      ],
    },
  ];

  return (
    <div className="h-full">
      <CustomIcon
        icon={faBoxCircleCheck}
        label="Action-Items"
        bgColor="#ECF3FE"
        color="#7FB2FF"
      />

      {!ReactApexChart ? (
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Skeleton className="w-8 h-4" />
              <Skeleton
                className={`h-14 ${
                  index === 1 ? "w-3/4" : index === 2 ? "w-full" : "w-1/2"
                }`}
              />
            </div>
          ))}
        </div>
      ) : (
        <ReactApexChart
          type="bar"
          responsive
          options={options}
          series={series}
          height={307}
        />
      )}
    </div>
  );
};

export default ActionItems;
