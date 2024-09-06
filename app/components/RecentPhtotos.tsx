import { faFileImage } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecentPhtotos = ({ data }: any) => {
  return (
    <>
      <div className="flex gap-2  items-center  ">
        <div className="bg-green-100 w-8 h-8  rounded-full flex justify-center items-center">
          <FontAwesomeIcon
            icon={faFileImage}
            className="text-base text-green-900"
          />
        </div>
        <span className="font-semibold text-xl ">Recent Photos</span>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <img src="/NoPage.svg" alt="" />
      </div>
    </>
  );
};

export default RecentPhtotos;
