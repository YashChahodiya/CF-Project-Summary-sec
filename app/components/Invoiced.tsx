import {
  faAddressCard,
  faFileChartColumn,
  faUserGroup,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { formatCurrency } from "~/helpers";

const Invoiced = ({ data, customer_additional_contacts }: any) => {
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

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white border h-full rounded-md shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5">
        <div className="flex justify-start items-center gap-3 w-full  ">
          <div className="bg-[#ffd1a7dd] w-12 h-10 rounded-full flex justify-center items-center text-[#FB8056] ">
            <FontAwesomeIcon icon={faUserGroup} className="" />
          </div>
          <div className=" w-full">
            Customer
            <p className="flex justify-between items-center  font-semibold">
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
      <div className="bg-white border h-full rounded-md shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5">
        <div className="flex gap-2 items-center">
          <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faFileChartColumn} />
          </div>
          <span className="font-semibold text-xl">Invoiced vs Actual</span>
        </div>
        <div className="space-y-1 mt-3">
          <p className="flex justify-between items-center text-sm">
            Total Project Amount (no/Tax){" "}
            <span className="text-emerald-600 font-semibold">
              {formatCurrency(original_contract_amount)}
            </span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Invoiced to Date (no/Tax) ({invoicedPercentage}%){" "}
            <span className="text-emerald-600 font-semibold">
              {formatCurrency(Number(amount_invoiced))}
            </span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Remaining to Invoice (no/Tax) ({remainingPercentage}%){" "}
            <span className="text-emerald-600 font-semibold">
              {formatCurrency(Number(remain_to_invoice))}
            </span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Total Actual Costs{" "}
            <span className="text-red-600 font-semibold">
              {formatCurrency(Number(total_actual_cost))}
            </span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Gross Profit{" "}
            <span className="text-emerald-600 font-semibold">
              {formatCurrency(Number(gross_profit))}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoiced;
