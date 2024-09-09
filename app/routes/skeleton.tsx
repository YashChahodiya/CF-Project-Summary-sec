import Skeleton from "~/components/Skeletons/skeleton";

const ChartSkeleton = () => {
  const isLoading = true;
  return (
    isLoading && (
      <>
        <div className="bg-white w-full h-full p-4 space-y-2 flex flex-col">
          {/* Y-Axis labels and Chart bars */}
          <div className="flex flex-row items-end justify-between h-full space-x-4">
            {/* Y-Axis labels */}
            <div className="flex flex-col justify-between h-full space-y-2">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="w-8 h-2 rounded-full "></Skeleton>
              ))}
            </div>

            {/* Chart Bars */}
            <div className="flex items-end space-x-4 h-full">
              {/* Individual Bars */}
              {["Committed", "Actual", "Labor", "Invoiced"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex flex-col items-center space-y-2"
                  >
                    {/* Bar */}
                    <Skeleton
                      className={`w-8 ${
                        index === 1 ? "h-40" : index === 2 ? "h-16" : "h-12"
                      } rounded-md bg-gray-200`}
                    />
                    {/* Bar Label */}
                    <Skeleton className="w-16 h-4 rounded-full bg-gray-200"></Skeleton>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ChartSkeleton;
