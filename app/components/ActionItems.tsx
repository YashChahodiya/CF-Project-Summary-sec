import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { faBoxCircleCheck } from "@fortawesome/pro-solid-svg-icons";
import axios from "axios";
import CustomIcon from "./CustomIcon";

const ActionItems = () => {
  const [ReactApexChart, setReactApexChart] = useState<any>();

  const [data, setData] = useState<any>([]);

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

        // Return the data fetched from the API
        setData(response?.data?.data?.modules);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    const timeOut = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      // Cleanup function to be called when the component unmounts
      // console.log("Cleanup function called");
      clearTimeout(timeOut);
    };
  }, []);

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
        columnWidth: "20%",
        barHeight: "50%",
      },
    },
    xaxis: { categories: ["OPEN", "DUE", "CLOSED"] },
    colors: ["#684CC7", "#e01f35", "#282691"],
    legend: {
      show: true,
      position: "top",
    },
  };

  // invoices
  const invoices = data?.open_incomplete_item?.opnIncoInvoice[0];
  const bills = data?.open_incomplete_item?.opnIncoBills[0];
  const pos = data?.open_incomplete_item?.opnIncoPurchaseOrder[0];

  const series = [
    {
      name: "Invocies",
      data: [
        Number(invoices?.total_open),
        Number(invoices?.total_due),
        Number(invoices?.total_close),
      ],
    },
    {
      name: "Bills",
      data: [
        Number(bills?.total_open),
        Number(bills?.bill_count),
        Number(bills?.total_close),
      ],
    },
    {
      name: "Bills",
      data: [
        Number(pos?.total_open),
        Number(pos?.bill_count),
        Number(pos?.total_close),
      ],
    },
  ];

  return (
    <div className="h-full">
      <CustomIcon icon={faBoxCircleCheck} label="Action-Items" />

      {!ReactApexChart ? (
        <p>Loading...</p>
      ) : (
        <ReactApexChart
          type="bar"
          options={options}
          series={series}
          height={307}
        />
      )}
    </div>
  );
};

export default ActionItems;
