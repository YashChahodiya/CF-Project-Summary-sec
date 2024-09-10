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
        <div className="grid grid-cols-4 gap-4  mt-4 w-full">
          {[...Array(8)].map((_, i) => (
            <Skeleton
              key={i}
              className="w-20 h-20 rounded-md col-span-1"
            ></Skeleton>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          {data?.aws_files > 0 ? (
            data?.aws_files?.map((i: any) => (
              <div key={i.id} className="w-20 h-20 rounded-md col-span">
                <img
                  src={i.url}
                  alt={i.name}
                  className="w-full h-full rounded-md"
                />
              </div>
            ))
          ) : (
            <img src="../../public/NoPage.svg" alt="" />
          )}
        </div>
      )}
    </div>
  );
};

export default RecentPhtotos;
