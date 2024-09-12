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
      <CustomIcon icon={faFileImage} label="Recent Photos" />

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
        <div className="w-full">
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
            <div className="grid grid-cols-5 gap-4 w-full mt-4">
              {data?.aws_files?.length > 0 ? (
                data?.aws_files.map(
                  (
                    { image_id, file_path, is_image, file_name }: any,
                    i: number
                  ) => (
                    <a
                      key={image_id ?? i}
                      href={file_path}
                      download={!is_image}
                      className="light-gallery overflow-hidden w-16 md:w-20 h-16 md:h-20 col-span-1  rounded-md "
                      data-sub-html={`<h4>${file_name}</h4>`}
                    >
                      <img
                        src={file_path}
                        alt={file_name}
                        className="cursor-pointer"
                      />
                    </a>
                  )
                )
              ) : (
                <img src="../../public/NoPage.svg" alt="No Photos" />
              )}
            </div>
          </CFGallery>
        </div>
      )}
    </div>
  );
};

export default RecentPhotos;
