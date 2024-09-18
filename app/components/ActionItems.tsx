import React, { useEffect, useState, Suspense, lazy } from "react";
import { ApexOptions } from "apexcharts";
import { faBoxCircleCheck } from "@fortawesome/pro-solid-svg-icons";
import axios from "axios";
import CustomIcon from "./CustomIcon";
import { IndexProps } from "~/routes/_index";

const ReactApexChart = require("react-apexcharts").default;

const ActionItems = ({ projectId, userId, compId }: IndexProps) => {
  const [data, setData] = useState<any>([]);
  // const [ReactApexChart, setReactApexChart] = useState<any>();
  // useEffect(() => {
  //   import("react-apexcharts").then((d) => setReactApexChart(() => d.default));
  // }, []);

  console.log(data, "1232");

  useEffect(() => {
    const fetchData = async () => {
      console.log("Data fetching from Action Items =====>>>>>.........");

      try {
        const formData = new FormData();
        formData.append("op", "get_project_reference_detail");
        formData.append("project_id", projectId.toString() ?? "0");
        formData.append("need_more_data", "0");
        formData.append("for_module_key", "");
        formData.append("version", "web");
        formData.append("from", "panel");
        formData.append("iframe_call", "0");
        formData.append("tz", "+5:30");
        formData.append("tzid", "Asia/Calcutta");
        formData.append("curr_time", new Date().toISOString());
        formData.append("force_login", "0");
        formData.append("global_project", "");
        formData.append("user_id", userId.toString() ?? "0");
        formData.append("company_id", compId.toString() ?? "0");

        const response = await axios.post(
          `https://api-cfdev.contractorforeman.net/service.php?opp=get_project_reference_detail&c=${
            compId ? Number(compId) : 0
          }&u=${userId ? Number(userId) : 0}&p=manage_projects`,
          formData
        );

        console.log(
          "Data fetching Successfull from Action Items  =====>>>>>",
          response?.data
        );
        setData(response?.data?.data?.modules || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (projectId) {
      fetchData();
    }
  }, [projectId, userId, compId]);

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
      name: "Invoices",
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
    {
      name: "Purchase Orders",
      data: [
        Number(pos?.total_open) || 0,
        Number(pos?.bill_count) || 0,
        Number(pos?.total_close) || 0,
      ],
    },
  ];

  if (data?.length <= 0) {
    console.log("<<<<<==== Data not Available ====>>>>>");
    return <div>Loading Charts</div>;
  }

  return (
    <div className="h-full">
      <CustomIcon
        icon={faBoxCircleCheck}
        label="Action Items"
        bgColor="#F0E5FF"
        color="#684CC7"
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

export default ActionItems;
