const Skeleton = ({ className }: any) => {
  return (
    <div
      className={`w-full h-full animate-pulse transition-all bg-gray-300 ${className}`}
    ></div>
  );
};

export default Skeleton;
