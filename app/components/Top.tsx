const Top = () => {
  return (
    <div className="  grid grid-cols-1 lg:grid-cols-5 w-full  gap-2 mt-3 ">
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500">
        Gross Profit
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500">
        Site manager
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500">
        Project Manager
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500">
        Start/End Date
      </div>
      <div className="col-span-1 rounded-lg border bg-white shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 ">
        Schedule Compelte
      </div>
    </div>
  );
};

export default Top;
