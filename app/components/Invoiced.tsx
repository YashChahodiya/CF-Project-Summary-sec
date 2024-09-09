import {
  faAddressCard,
  faFileChartColumn,
  faUserGroup,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "~/helpers";
import Skeleton from "./Skeletons/skeleton";
import { useEffect, useState } from "react";
import CustomIcon from "./CustomIcon";

const Invoiced = ({ data, customer_additional_contacts }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  console.log("invoiced", data);
  const {
    amount_invoiced,
    original_contract_amount,
    remain_to_invoice,
    total_actual_cost,
    gross_profit,
  } = data;

  const invoicedPercentage = (
    (parseFloat(amount_invoiced) / parseFloat(original_contract_amount)) *
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
      value: `${formatCurrency(original_contract_amount)}
`,
      color: "text-emerald-600",
    },
    {
      id: 2,
      label: "Invoiced to Date (no/Tax)",
      value: `${formatCurrency(Number(amount_invoiced))}
`,
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

  const commonStyle = `flex justify-between items-center text-sm `;
  const mainDivStyle = `bg-white border  rounded-md  hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 h-full`;

  return (
    <div className="flex flex-col gap-3">
      <div className={mainDivStyle}>
        <div className="flex justify-start items-center gap-3 w-full  ">
          <div className="bg-[#ffd1a7dd] w-12 h-10 rounded-full flex justify-center items-center text-[#FB8056] ">
            <FontAwesomeIcon icon={faUserGroup} className="text-base" />
          </div>
          <div className=" w-full">
            Customer
            <p className="flex justify-between items-center  font-semibold hover:text-[#FB8056] hover:cursor-pointer hover:transition-colors hover:duration-700">
              {customer_additional_contacts[0].first_name +
                " " +
                customer_additional_contacts[0].last_name +
                " " +
                `(${customer_additional_contacts[0].company_name})`}{" "}
              <span className="text-[#FB8056] font-semibold">
                <FontAwesomeIcon icon={faAddressCard} className="text-sm" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={mainDivStyle}>
        <CustomIcon icon={faFileChartColumn} label="Invoiced vs Actual" />
        {isLoading ? (
          <InvoicedSkeleton />
        ) : (
          <div className="space-y-1 mt-3">
            {Items.map((i) => (
              <p className={commonStyle}>
                {i.label}{" "}
                <span className={`${i.color} font-semibold`}>{i.value}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
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
        Invoiced to Date (no/Tax) (77%){" "}
        <Skeleton className={skeletonStyle}></Skeleton>
      </p>
      <p className={commonStyle}>
        Remaining to Invoice (no/Tax) (23%){" "}
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
