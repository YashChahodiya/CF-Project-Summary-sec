import { faCalculator } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Schedular = () => {
  return (
    <div className="w-full h-64">
      {" "}
      <div className="flex gap-2  items-center  space-y-2 text-sm">
        <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faCalculator} className="text-base" />
        </div>
        <span className="font-semibold text-xl">Schedular</span>
      </div>
    </div>
  );
};

export default Schedular;
