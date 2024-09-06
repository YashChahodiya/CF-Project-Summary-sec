import { faFileLines } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "~/helpers";

const WorkInprogress = ({ data }: any) => {
  const {
    cost_completed,
    current_cost_budget,
    earned_revenue,
    forcast_completed,
    original_contract_amount,
    over_billing,
    total_actual_cost,
    under_billing,
  } = data;

  return (
    <>
      <div className="flex gap-2  items-center  ">
        <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faFileLines} />
        </div>
        <span className="font-semibold text-xl">Work In Progress (WIP)</span>
      </div>
      <div className="pt-3">
        <p className="flex justify-between items-center text-sm">
          Total Project Amount (no/Tax){" "}
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(Number(original_contract_amount))}
          </span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Invoiced to Date (no/Tax){" "}
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(Number(original_contract_amount))}
          </span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Current Cost Budget{" "}
          <span className="text-red-600  font-semibold">
            {formatCurrency(Number(current_cost_budget))}
          </span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Total Actual Costs{" "}
          <span className="text-red-600  font-semibold">
            {formatCurrency(Number(total_actual_cost))}
          </span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Cost % Complete{" "}
          <span className=" font-semibold">
            {Number(cost_completed).toFixed(2)}%
          </span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Forecasted % Complete{" "}
          <span className="font-semibold">
            {Number(forcast_completed).toFixed(2)}%
          </span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Earned Revenue{" "}
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(Number(earned_revenue))}
          </span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Over Billings{" "}
          <span className="text-emerald-600 font-semibold">
            {formatCurrency(Number(over_billing))}
          </span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Under Billings{" "}
          <span className="text-red-600 font-semibold">
            {formatCurrency(Number(under_billing))}
          </span>
        </p>
      </div>
    </>
  );
};

export default WorkInprogress;
