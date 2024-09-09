import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomIcon = ({ icon, className, label }: any) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        className={`bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center ${className}`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="font-semibold text-base">{label}</span>
    </div>
  );
};

export default CustomIcon;
