import { faCalculator } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Invoiced = () => {
  return (
    <div className="flex gap-2  items-center  ">
      <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
        <FontAwesomeIcon icon={faCalculator} />
      </div>
      <span className="font-semibold text-xl">Invoiced vs Actual</span>
    </div>
  );
};

export default Invoiced;
