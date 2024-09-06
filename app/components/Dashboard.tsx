import React, { Suspense, useEffect, useState } from "react";
import ProjectSummary from "./ProjectSummary";
import Invoiced from "./Invoiced";
import ActionItems from "./ActionItems";
import SummaryPercentages from "./SummaryPercentages";
import WorkInprogress from "./WorkInprogress";
import RecentPhtotos from "./RecentPhtotos";
import Schedular from "./Schedular";
import Top from "./Top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/sharp-regular-svg-icons";

// const ChartWidget1 = React.lazy(() => import("./Chart1"));
// const ChartWidget2 = React.lazy(() => import("./Chart2"));
// const ChartWidget3 = React.lazy(() => import("./Chart3"));
// const ChartWidget4 = React.lazy(() => import("./Chart4"));
// import SchedulerWidget from "./SchedulerWidget"; // Ensure SchedulerWidget is statically imported if it's not dynamic
// import axios from "axios";

const Dashboard: React.FC = () => {
  //api // https://api-cfdev.contractorforeman.net/service.php?opp=get_project_detail&c=829&u=109871&p=manage_projects

  //   const [data, setData] = useState<any>([]);

  //   useEffect(() => {
  //     const formData = new FormData();
  //     formData.append("op", "get_dashboard_projects");
  //     formData.append("module_id", "1");
  //     formData.append("is_refresh", "0");
  //     formData.append("version", "web");
  //     formData.append("from", "panel");
  //     formData.append("iframe_call", "0");
  //     formData.append("tz", "+5:30");
  //     formData.append("tzid", "Asia/Calcutta");
  //     formData.append("curr_time", "2024-08-31 15:50:38");
  //     formData.append("force_login", "0");
  //     formData.append("global_project", "");
  //     formData.append("user_id", "109871");
  //     formData.append("company_id", "829");

  //     try {
  //       axios
  //         .post(
  //           "https://api-beta.contractorforeman.net/service.php?opp=get_dashboard_projects&c=829&u=109871&p=manage_projects",
  //           formData
  //         )
  //         .then((res) => {
  //           const data = res.data.data;
  //           console.log(res.data.data);
  //           setData(data);
  //         })
  //         .catch((err) => console.log(err));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  return (
    <div className="space-y-4  px-4  overflow-y-auto sidebar ">
      <div className="  w-full h-16  ">
        <Suspense fallback={<p>Loading Poject topbar...</p>}>
          <Top />
        </Suspense>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 w-full h-full">
        <div className="bg-white border rounded-md col-span-4 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5">
          <Suspense fallback={<p>Loading Poject Summary...</p>}>
            <ProjectSummary />
          </Suspense>
        </div>
        <div className="bg-white border rounded-md col-span-4 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5">
          <Suspense fallback={<p>Loading SummaryPercentages... </p>}>
            <SummaryPercentages />
          </Suspense>
        </div>
        <div className="bg-white border rounded-md col-span-4 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5">
          <Suspense fallback={<p>Loading ActionItems...</p>}>
            <ActionItems />
          </Suspense>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full h-full ">
        <div className="col-span-4 ">
          <Suspense fallback={<p>Loading Invoiced ...</p>}>
            <Invoiced />
          </Suspense>
        </div>
        <div className="bg-white border rounded-md col-span-4 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5">
          <Suspense fallback={<p>Loading WorkInprogress...</p>}>
            <WorkInprogress />
          </Suspense>
        </div>
        <div className="bg-white border rounded-md col-span-4 w-full h-64 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5">
          <Suspense fallback={<p>Loading RecentPhtotos...</p>}>
            <RecentPhtotos />
          </Suspense>
        </div>
      </div>
      <div className="bg-white border rounded-md  w-full shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5">
        <Schedular />
        <hr />
      </div>
    </div>
  );
};

export default Dashboard;
