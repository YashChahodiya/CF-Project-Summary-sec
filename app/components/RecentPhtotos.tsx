import { faFileImage } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecentPhtotos = () => {
  return (
    <>
      <div className="flex gap-2  items-center  ">
        <div className="bg-blue-100 w-7 h-7 rounded-full flex justify-center items-center">
          <FontAwesomeIcon icon={faFileImage} />
        </div>
        <span className="font-semibold text-xl">Recent Photos</span>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <img src="/NoPage.svg" alt="" />
      </div>
    </>
  );
};

export default RecentPhtotos;
