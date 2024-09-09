import { faFileImage } from "@fortawesome/pro-solid-svg-icons";
import CustomIcon from "./CustomIcon";
import { useEffect, useState } from "react";
import Skeleton from "./Skeletons/skeleton";

const RecentPhtotos = ({ data }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="h-full">
      <CustomIcon icon={faFileImage} label="Recent Photos" />

      {isLoading ? (
        <div className="flex flex-wrap gap-4">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="w-20 h-20 rounded-md"></Skeleton>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <img src="/NoPage.svg" alt="" />
        </div>
      )}
    </div>
  );
};

export default RecentPhtotos;
