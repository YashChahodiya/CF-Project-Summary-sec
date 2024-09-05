import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faMinus,
  faPlus,
  faEquals,
} from "@fortawesome/sharp-regular-svg-icons";
import { faCalculator } from "@fortawesome/pro-duotone-svg-icons";

const ProjectSummary = () => {
  return (
    <div className="space-y-2 text-sm">
      <div className="flex gap-2  items-center  ">
        <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faCalculator} className="text-base" />
        </div>
        <span className="font-semibold text-xl">Project Summary</span>
      </div>

      <div className="flex flex-col gap-3.5">
        {/* top */}
        <div className="border border-gray-300 w-full h-full rounded-md space-y-2 px-4 py-2 relative">
          <p className="flex justify-between items-center text-sm">
            Original Contract Amount (w/Tax){" "}
            <span className="text-emerald-600 font-semibold">$28,825.00</span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Change Orders (w/Tax)
            <span className="text-emerald-600 font-semibold">$600.00</span>
          </p>
          <div className="w-8 h-8 rounded-full bg-white shadow-lg shadow-black/20 absolute -bottom-3 right-1/2  flex justify-center items-center">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>

        {/* middle */}
        <p className="flex justify-between items-center text-sm bg-gray-200 px-4 py-2 rounded-md ">
          Total Project Amount (w/Tax)
          <span className="text-blue-950 font-semibold">$29,425.00</span>
        </p>

        {/* bootom */}
        <div className="border border-gray-300 w-full h-full rounded-md space-y-2 px-4 py-2 relative">
          <div className="w-8 h-8 rounded-full bg-white shadow-lg shadow-black/20 absolute -top-4 right-1/2  flex justify-center items-center">
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <p className="flex justify-between items-center text-sm">
            Customer Payments
            <span className="text-red-500 font-semibold">$10,000.00</span>
          </p>
          <p className="flex justify-between items-center text-sm">
            Unpaid Invoices
            <span className="text-red-500 font-semibold">$6,925.00</span>
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
            <span>$12,500.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
