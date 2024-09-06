import { faCalculator } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "~/helpers";

const Top = ({ data }: any) => {
  return (
    <div className="  grid grid-cols-1 lg:grid-cols-5 w-full h-full  gap-2 mt-3 ">
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 w-full">
        <div className="flex justify-start items-center gap-3 w-full  ">
          <div className="bg-blue-100 w-12  h-10 rounded-full flex justify-center items-center ">
            <FontAwesomeIcon icon={faCalculator} className="text-2xl" />
          </div>
          <div className=" w-full">
            {" "}
            Gross Profit
            <p className="flex justify-between items-center text-sm font-semibold">
              (-812.06%){" "}
              <span className="text-emerald-600 font-semibold">
                {formatCurrency(Number(data?.gross_profit))}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 w-full">
        <div className="flex justify-start items-center gap-3 w-full  ">
          <div className="bg-blue-100 w-14   h-12 rounded-full flex justify-center items-center ">
            <FontAwesomeIcon icon={faCalculator} className="text-2xl" />
          </div>
          <div className=" w-full">
            {" "}
            Site Manager
            <p className="flex justify-between items-center text-sm font-semibold">
              <span className=" font-semibold">-</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 w-full">
        <div className="flex justify-start items-center gap-3 w-full  ">
          <div className="bg-blue-100 w-14   h-12 rounded-full flex justify-center items-center ">
            <FontAwesomeIcon icon={faCalculator} className="text-2xl" />
          </div>
          <div className=" w-full">
            {" "}
            Project Manager
            <p className="flex justify-between items-center text-sm font-semibold">
              <span className=" font-semibold">-</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 w-full">
        <div className="flex justify-start items-center gap-3 w-full  ">
          <div className="bg-blue-100 w-14   h-12 rounded-full flex justify-center items-center ">
            <FontAwesomeIcon icon={faCalculator} className="text-2xl" />
          </div>
          <div className=" w-full">
            {" "}
            Start/End Date
            <p className="flex justify-between items-center text-sm font-semibold">
              <span className="font-semibold">-</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 w-full">
        <div className="flex justify-start items-center gap-3 w-full  ">
          <div className="bg-blue-100 w-14   h-12 rounded-full flex justify-center items-center ">
            <FontAwesomeIcon icon={faCalculator} className="text-2xl" />
          </div>
          <div className=" w-full">
            {" "}
            Schedule Completed
            <p className="flex justify-between items-center text-sm font-semibold">
              <span className="font-semibold">0%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
