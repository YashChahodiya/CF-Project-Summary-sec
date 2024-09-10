import Skeleton from "~/components/Skeletons/skeleton";

const ChartSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Skeleton className="w-8 h-4" />
            <Skeleton
              className={`h-14 ${
                index === 1 ? "w-3/4" : index === 2 ? "w-full" : "w-1/2"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartSkeleton;
