import { faFileImage } from "@fortawesome/pro-solid-svg-icons";
import CustomIcon from "./CustomIcon";
import { useEffect, useState } from "react";
import Skeleton from "./Skeletons/skeleton";
import { CFGallery } from "./LightGallery";

const RecentPhotos = ({ data }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="h-full">
      <CustomIcon
        icon={faFileImage}
        label="Recent Photos"
        bgColor="#ECFAF6"
        color="#68D6B2"
      />

      {isLoading ? (
        <div className="grid grid-cols-5 gap-4 mt-4 w-full">
          {[...Array(10)].map((_, i) => (
            <Skeleton
              key={i}
              className="w-20 h-20 rounded-md col-span-1"
            ></Skeleton>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <CFGallery
            zoom={true}
            animateThumb={false}
            zoomFromOrigin={false}
            allowMediaOverlap={true}
            toggleThumb={true}
            backdropDuration={150}
            showZoomInOutIcons={true}
            actualSize={false}
            mode="lg-slide"
            alignThumbnails="left"
            className="flex gap-[15px] flex-wrap"
            mousewheel={true}
          >
            {data?.aws_files?.length > 0 ? (
              data?.aws_files.map((i: any, index: number) => (
                <div key={index} className="grid grid-cols-5 gap-4 w-full">
                  <a
                    href={i?.file?.file_path}
                    download={!i?.file?.is_image}
                    className="light-gallery overflow-hidden rounded-md"
                    data-sub-html={`<h4>${i?.file?.file_name}</h4>`}
                  >
                    <img
                      src={i.file?.file_path}
                      alt={i.name}
                      className="w-20 h-20 rounded-md col-span-1 cursor-pointer transition-transform duration-300 ease-out transform hover:scale-110"
                    />
                  </a>
                </div>
              ))
            ) : (
              <img src="../../public/NoPage.svg" alt="" />
            )}
          </CFGallery>
        </div>
      )}
    </div>
  );
};

export default RecentPhotos;
