import { faCalculator } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Top = () => {
  return (
    <div className="  grid grid-cols-1 lg:grid-cols-5 w-full h-full  gap-2 mt-3 ">
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 w-full">
        <div className="flex justify-start items-center gap-3 w-full  ">
          <div className="bg-blue-100 w-12   h-12 rounded-full flex justify-center items-center ">
            <FontAwesomeIcon icon={faCalculator} className="text-2xl" />
          </div>
          <div className=" w-full">
            {" "}
            Gross Profit
            <p className="flex justify-between items-center text-sm font-semibold">
              (-812.06%){" "}
              <span className="text-emerald-600 font-semibold">$0.00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5">
        Site manager
        <p className="flex justify-between items-center text-sm">
          <span className="font-semibold">-</span>
        </p>
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5">
        Project Manager
        <p className="flex justify-between items-center text-sm">
          <span className=" font-semibold">-</span>
        </p>
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5">
        Start/End Date
        <p className="flex justify-between items-center text-sm">
          <span className=" font-semibold">-</span>
        </p>
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5 ">
        Schedule Compelte
        <p className="flex justify-between items-center text-sm">
          <span className=" font-semibold">0%</span>
        </p>
      </div>
    </div>
  );
};

export default Top;
