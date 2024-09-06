import { faFileLines } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkInprogress = () => {
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
          <span className="text-emerald-600 font-semibold">$11,330.00</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Invoiced to Date (no/Tax){" "}
          <span className="text-emerald-600 font-semibold">$11,330.00</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Current Cost Budget{" "}
          <span className="text-red-600  font-semibold">$8,750.00</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Total Actual Costs{" "}
          <span className="text-red-600  font-semibold">$79,668.14</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Cost % Complete <span className=" font-semibold">910.49%</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Forecasted % Complete <span className="font-semibold">0%</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Earned Revenue{" "}
          <span className="text-emerald-600 font-semibold">$0.00</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Over Billings{" "}
          <span className="text-emerald-600 font-semibold">$0.00</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          Under Billings{" "}
          <span className="text-red-600 font-semibold">$0.00</span>
        </p>
      </div>
    </>
  );
};

export default WorkInprogress;
