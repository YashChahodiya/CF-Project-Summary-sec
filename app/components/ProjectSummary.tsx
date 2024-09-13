import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faMinus,
  faPlus,
  faEquals,
} from "@fortawesome/sharp-regular-svg-icons";
import { faCalculator } from "@fortawesome/pro-duotone-svg-icons";

import { formatCurrency } from "~/helpers";
import CustomIcon from "./CustomIcon";
import { useEffect, useState } from "react";
import Skeleton from "./Skeletons/skeleton";

const ProjectSummary = ({ data }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const {
    change_orders,
    contract_amount_held,
    invoice_payments,
    original_contract_amount,
    remain_invoices,
    service_tickets,
    total_project_amount,
    unpaid_invoices,
    work_orders,
  } = data;

  if (isLoading) {
    return (
      <div className="space-y-2 text-sm">
        <CustomIcon
          icon={faCalculator}
          label="Project Summary"
          color={`#78AEFE`}
          bgColor={`#ECF3FF`}
        />

        <div className="flex flex-col gap-3.5">
          {/* top */}
          <div className="border border-gray-300 w-full h-full rounded-md space-y-2 px-4 py-2 relative">
            <p className="flex justify-between items-center text-sm">
              Original Contract Amount (w/Tax){" "}
              <Skeleton className="w-4 h-2 rounded-xl"></Skeleton>
            </p>
            <p className="flex justify-between items-center text-sm">
              Change Orders (w/Tax)
              <Skeleton className="w-4 h-2 rounded-xl"></Skeleton>
            </p>
            <div className="w-6 h-8 rounded-full bg-white shadow-lg shadow-black/20 absolute -bottom-3 right-1/2  flex justify-center items-center">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>

          {/* middle */}
          <p className="flex justify-between items-center text-sm bg-gray-200 px-4 py-2 rounded-md ">
            Total Project Amount (w/Tax)
            <Skeleton className="w-6 h-2 rounded-xl"></Skeleton>
          </p>

          {/* bootom */}
          <div className="border border-gray-300 w-full h-full rounded-md space-y-2 px-4 py-2 relative">
            <div className="w-8 h-8 rounded-full bg-white shadow-lg shadow-black/20 absolute -top-4 right-1/2  flex justify-center items-center">
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <p className="flex justify-between items-center text-sm">
              Customer Payments
              <Skeleton className="w-6 h-2 rounded-xl"></Skeleton>
            </p>
            <p className="flex justify-between items-center text-sm">
              Unpaid Invoices
              <Skeleton className="w-4 h-2 rounded-xl"></Skeleton>
            </p>
          </div>

          {/* Final block */}
          <div className="relative px-4 py-2">
            <div className="border border-dashed  w-full "></div>
            <div className="w-6 h-8 rounded-full bg-white shadow-lg shadow-black/20 absolute -top-2.5 right-1/2  flex justify-center items-center">
              <FontAwesomeIcon icon={faEquals} />
            </div>
            <p className="flex justify-between items-center font-bold text-sm mt-3">
              Remaining to Invoice
              <Skeleton className="w-6 h-2 rounded-xl"></Skeleton>
            </p>
            {contract_amount_held && (
              <p className="flex justify-between items-center font-bold text-sm mt-3">
                Current Retention Held
                <Skeleton className="w-6 h-2 rounded-xl"></Skeleton>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2 text-sm">
      <CustomIcon
        icon={faCalculator}
        label="Project Summary"
        color={`#78AEFE`}
        bgColor={`#ECF3FF`}
        className="text-base"
      />

      <div className="flex flex-col gap-3.5">
        {/* top */}
        <div className="border border-gray-300 w-full h-full rounded-md space-y-2 px-4 py-2 relative">
          <p className="flex justify-between items-center text-sm">
            Original Contract Amount (w/Tax){" "}
            <span className="text-emerald-600 font-semibold">
              {formatCurrency(Number(original_contract_amount))}
            </span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Change Orders (w/Tax)
            <span className="text-emerald-600 font-semibold">
              {formatCurrency(Number(change_orders!))}
            </span>
          </p>
          <div className="w-8 h-8 rounded-full bg-white shadow-lg shadow-black/20 absolute -bottom-3 right-1/2  flex justify-center items-center">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>

        {/* middle */}
        <p className="flex justify-between items-center text-sm bg-gray-200 px-4 py-2 rounded-md ">
          Total Project Amount (w/Tax)
          <span className="text-blue-950 font-semibold">
            {formatCurrency(Number(total_project_amount))}
          </span>
        </p>

        {/* bootom */}
        <div className="border border-gray-300 w-full h-full rounded-md space-y-2 px-4 py-2 relative">
          <div className="w-8 h-8 rounded-full bg-white shadow-lg shadow-black/20 absolute -top-4 right-1/2  flex justify-center items-center">
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <p className="flex justify-between items-center text-sm">
            Customer Payments
            <span className="text-red-500 font-semibold">
              {formatCurrency(Number(invoice_payments))}
            </span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Unpaid Invoices
            <span className="text-red-500 font-semibold">
              {formatCurrency(Number(unpaid_invoices))}
            </span>
          </p>
        </div>

        {/* Final block */}
        <div className="relative px-4 py-2">
          <div className="border border-dashed  w-full "></div>
          <div className="w-8 h-8 rounded-full bg-white shadow-lg shadow-black/20 absolute -top-2.5 right-1/2  flex justify-center items-center">
            <FontAwesomeIcon icon={faEquals} />
          </div>
          <p className="flex justify-between items-center font-bold text-sm mt-3">
            Remaining to Invoice
            <span>{formatCurrency(Number(remain_invoices))}</span>
          </p>
          {contract_amount_held && (
            <p className="flex justify-between items-center font-bold text-sm mt-3">
              Current Retention Held
              <span>{formatCurrency(Number(contract_amount_held))}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
