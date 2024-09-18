import {
  faAddressCard,
  faArrowUpRightFromSquare,
  faFileChartColumn,
  faUserGroup,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "~/helpers";
import Skeleton from "./Skeletons/skeleton";
import { useEffect, useState } from "react";
import { Modal, Button, Typography, Tooltip } from "antd";
import CustomIcon from "./CustomIcon";
import { CFModal } from "./Modal";
import axios from "axios";
import { faExpand } from "@fortawesome/sharp-regular-svg-icons";

import MapComponent from "./Map";

const Invoiced = ({ data, customer_additional_contacts }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    amount_invoiced,
    original_contract_amount,
    remain_to_invoice,
    total_actual_cost,
    gross_profit,
  } = data?.billing_vs_actual;

  const invoicedPercentage = (
    (parseFloat(amount_invoiced!) / parseFloat(original_contract_amount!)) *
    100
  ).toFixed(0);
  const remainingPercentage = (
    (parseFloat(remain_to_invoice) / parseFloat(original_contract_amount)) *
    100
  ).toFixed(0);

  useEffect(() => {
    if (data && customer_additional_contacts) {
      setIsLoading(false);
    }
  }, []);

  const Items = [
    {
      id: 1,
      label: "Total Project Amount (no/Tax)",
      value: `${formatCurrency(original_contract_amount)}`,
      color: "text-emerald-600",
    },
    {
      id: 2,
      label: "Invoiced to Date (no/Tax)",
      value: `${formatCurrency(Number(amount_invoiced))}`,
      color: "text-emerald-600",
    },
    {
      id: 3,
      label: "Remaining to Invoice (no/Tax)",
      value: `${formatCurrency(Number(remain_to_invoice))}`,
      color: "text-emerald-600",
    },
    {
      id: 4,
      label: "Total Actual Costs",
      value: `${formatCurrency(Number(total_actual_cost))}`,
      color: "text-red-600",
    },
    {
      id: 5,
      label: "Gross Profit",
      value: `${formatCurrency(Number(gross_profit))}`,
      color: "text-emerald-600",
    },
  ];

  const [dirData, setDirData] = useState<any>([]);

  console.log(data, "1232");

  const fetchData = async () => {
    try {
      const formData = new FormData();
      formData.append("op", "get_directory_detail");
      formData.append("directory_id", "53740");
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
      formData.append("user_id", "50304");
      formData.append("company_id", "408");

      const response = await axios.post(
        "https://api-cfdev.contractorforeman.net/service.php?opp=get_directory_detail&c=408&u=50304&p=manage_projects",
        formData
      );
      console.log(response?.data?.data);
      setDirData(response?.data?.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const ModalData = [
    {
      name: "company",
      value: dirData?.company_name,
    },
    {
      name: "name",
      value: dirData?.first_name,
    },
    {
      name: "phone",
      value: dirData?.phone,
    },
    {
      name: "cell",
      value: dirData?.cell,
    },
    {
      name: "email",
      value: dirData?.email,
    },
    {
      name: "Address",
      value:
        dirData?.address1 +
        "<br/>" +
        dirData?.address2 +
        "<br/>" +
        dirData?.city +
        "," +
        dirData?.state,
    },
  ];

  const commonStyle = `flex justify-between items-center text-sm `;
  const mainDivStyle = `bg-white border  rounded-md  hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 h-full`;

  const handleModalOpen = () => {
    fetchData();
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  console.log(data);

  const CommonTransition =
    "hover:text-[#FB8056] hover:cursor-pointer hover:transition-colors hover:duration-700";

  return (
    <div className="flex flex-col gap-3">
      <div className={mainDivStyle}>
        <div className="flex justify-start items-center gap-3 w-full  ">
          <div className="bg-[#ffe8d2dd] w-12 h-10 rounded-full flex justify-center items-center text-[#FB8056] ">
            <FontAwesomeIcon icon={faUserGroup} className="text-base" />
          </div>
          <div className=" w-full">
            Customer
            <p className="flex justify-between items-center  font-semibold hover:text-[#FB8056] hover:cursor-pointer hover:transition-all hover:duration-700">
              {data?.customer_name}{" "}
              <span className="text-[#FB8056] font-semibold">
                <FontAwesomeIcon icon={faAddressCard} className="text-sm" />
              </span>
            </p>
          </div>
        </div>

        <div className={mainDivStyle}>
          <CustomIcon
            icon={faFileChartColumn}
            label="Invoiced vs Actual"
            bgColor="#F3ECF5"
            color="#CE6698"
          />
          {isLoading ? (
            <InvoicedSkeleton />
          ) : (
            <div className="space-y-1 mt-3">
              {Items.map((i) => (
                <p className={commonStyle} key={i.id}>
                  {i.label}{" "}
                  <span className={`${i.color} font-semibold`}>{i.value}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Ant Design Modal */}
      <CFModal
        open={isModalVisible}
        size="800px"
        className="p-0 m-0 "
        closeModalHandler={() => setIsModalVisible(false)}
        icon={<FontAwesomeIcon className="w-3.5 h-3.5" icon={faAddressCard} />}
        title={"Conatct Details"}
        footer={
          <>
            <hr />
            <a
              className={`flex justify-end items-end w-full  underline hover:underline text-primary-900  ${CommonTransition}`}
              href="https://app-cfdev.contractorforeman.net"
              target="_blank"
            >
              View full Details
            </a>
          </>
        }
      >
        <div className="flex justify-between items-center gap-3 w-full">
          <div className="w-1/2">
            {ModalData &&
              ModalData.map(({ name, value }: any, i) => (
                <div
                  className="capitalize flex justify-between items-center gap-x-1 w-full py-1"
                  key={i}
                >
                  <p className="font-bold w-1/4 text-start">{name}</p>

                  <span
                    dangerouslySetInnerHTML={{ __html: value }}
                    className="w-3/4 text-left"
                  ></span>
                </div>
              ))}
          </div>

          <MapComponent />
        </div>
      </CFModal>
    </>
  );
};

export default Invoiced;

const InvoicedSkeleton = () => {
  const skeletonStyle = ` w-6 h-2 rounded-xl`;
  const commonStyle = `flex justify-between items-center text-sm`;

  return (
    <div className="space-y-1 mt-3">
      <p className={commonStyle}>
        Total Project Amount (no/Tax){" "}
        <Skeleton className={skeletonStyle}></Skeleton>
      </p>
      <p className={commonStyle}>
        Invoiced to Date (no/Tax){" "}
        <Skeleton className={skeletonStyle}></Skeleton>
      </p>
      <p className={commonStyle}>
        Remaining to Invoice (no/Tax){" "}
        <Skeleton className={skeletonStyle}></Skeleton>
      </p>
      <p className={commonStyle}>
        Total Actual Costs <Skeleton className={skeletonStyle}></Skeleton>
      </p>
      <p className={commonStyle}>
        Gross Profit <Skeleton className={skeletonStyle}></Skeleton>
      </p>
    </div>
  );
};
