// import React, { Suspense, useEffect, useState } from "react";
// import ProjectSummary from "./ProjectSummary";
// import Invoiced from "./Invoiced";
// import ActionItems from "./ActionItems";
// import SummaryPercentages from "./SummaryPercentages";
// import WorkInprogress from "./WorkInprogress";
// import RecentPhtotos from "./RecentPhtotos";
// import Schedular from "./Schedular";
// import Top from "./Top";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalculator } from "@fortawesome/sharp-regular-svg-icons";
// import axios from "axios";
// import { LoaderFunctionArgs } from "@remix-run/node";

// const Dashboard = (data: any) => {
//   console.log(data);

//   const {
//     project_summary,
//     wip_widget,
//     customer_additional_contacts,
//     billing_vs_actual,
//     all_item_total,
//   } = data?.data;

//   // const [data, setData] = useState<any>([]);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const formData = new FormData();
//   //       formData.append("op", "get_project_detail");
//   //       formData.append("project_id", "147534");
//   //       formData.append("is_refresh", "0");
//   //       formData.append("record_type", "project");
//   //       formData.append("version", "web");
//   //       formData.append("from", "panel");
//   //       formData.append("iframe_call", "0");
//   //       formData.append("tz", "+5:30");
//   //       formData.append("tzid", "Asia/Calcutta");
//   //       formData.append("curr_time", "2024-08-31 15:50:38");
//   //       formData.append("force_login", "0");
//   //       formData.append("global_project", "");
//   //       formData.append("user_id", "109871");
//   //       formData.append("company_id", "829");

//   //       const response = await axios.post(
//   //         "https://api-cfdev.contractorforeman.net/service.php?opp=get_project_detail&c=829&u=109871&p=manage_projects",
//   //         formData
//   //       );

//   //       // Return the data fetched from the API
//   //       setData(response.data.data);
//   //     } catch (error) {
//   //       console.log("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);
//   //api // https://api-cfdev.contractorforeman.net/service.php?opp=get_project_detail&c=829&u=109871&p=manage_projects

//   return (
//     // <div>fsbfsbgdgdgbd</div>
//     <div className="space-y-4  px-4  overflow-y-auto sidebar ">
//       <div className="  w-full h-16  ">
//         <Suspense fallback={<p>Loading Poject topbar...</p>}>
//           <Top data={data.data} />
//         </Suspense>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-3 w-full h-full">
//         <div className="bg-white border rounded-md lg:col-span-1 xl:col-span-4 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500 px-4 py-2.5">
//           <Suspense fallback={<p>Loading Poject Summary...</p>}>
//             <ProjectSummary data={project_summary} />
//           </Suspense>
//         </div>
//         <div className="bg-white border rounded-md lg:col-span-1 xl:col-span-4 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5">
//           <Suspense fallback={<p>Loading SummaryPercentages... </p>}>
//             <SummaryPercentages data={data.data} />
//           </Suspense>
//         </div>
//         <div className="bg-white  rounded-md col-span-4 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5 ">
//           <Suspense fallback={<p>Loading ActionItems...</p>}>
//             <ActionItems />
//           </Suspense>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full h-full ">
//         <div className="col-span-4 ">
//           <Suspense fallback={<p>Loading Invoiced ...</p>}>
//             <Invoiced
//               data={billing_vs_actual}
//               customer_additional_contacts={customer_additional_contacts}
//             />
//           </Suspense>
//         </div>
//         <div className="bg-white border rounded-md col-span-4 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5">
//           <Suspense fallback={<p>Loading WorkInprogress...</p>}>
//             <WorkInprogress data={wip_widget} />
//           </Suspense>
//         </div>
//         <div className="bg-white border rounded-md col-span-4 w-full h-64 shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5">
//           <Suspense fallback={<p>Loading RecentPhtotos...</p>}>
//             <RecentPhtotos data={data} />
//           </Suspense>
//         </div>
//       </div>
//       <div className="bg-white border rounded-md  w-full shadow-md hover:shadow-lg hover:transition-shadow hover:duration-500  px-4 py-2.5">
//         <Schedular data={data} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { Suspense } from "react";
import ProjectSummary from "./ProjectSummary";
import Invoiced from "./Invoiced";
import ActionItems from "./ActionItems";
import SummaryPercentages from "./SummaryPercentages";
import WorkInprogress from "./WorkInprogress";
import RecentPhtotos from "./RecentPhtotos";
import Schedular from "./Schedular";
import Top from "./Top";

const Dashboard = (data: any) => {
  console.log(data);

  const {
    project_summary,
    wip_widget,
    customer_additional_contacts,
    billing_vs_actual,
  } = data?.data;

  return (
    <div className="space-y-4 p-4 overflow-y-auto sidebar">
      <div className="w-full">
        <Suspense fallback={<p>Loading Project topbar...</p>}>
          <Top data={billing_vs_actual} />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <div className="bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 p-4">
          <Suspense fallback={<p>Loading Project Summary...</p>}>
            <ProjectSummary data={project_summary} />
          </Suspense>
        </div>
        <div className="bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 px-4 pt-4">
          <Suspense fallback={<p>Loading Summary Percentages...</p>}>
            <SummaryPercentages data={data.data} />
          </Suspense>
        </div>
        <div className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 px-4 pt-4">
          <Suspense fallback={<p>Loading Action Items...</p>}>
            <ActionItems />
          </Suspense>
        </div>
        {/* </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"> */}
        <div className="lg:col-span-1">
          <Suspense fallback={<p>Loading Invoiced...</p>}>
            <Invoiced
              data={billing_vs_actual}
              customer_additional_contacts={customer_additional_contacts}
            />
          </Suspense>
        </div>
        <div className="bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 p-4">
          <Suspense fallback={<p>Loading Work In Progress...</p>}>
            <WorkInprogress data={wip_widget} />
          </Suspense>
        </div>
        <div className="bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 p-4 h-64">
          <Suspense fallback={<p>Loading Recent Photos...</p>}>
            <RecentPhtotos data={data} />
          </Suspense>
        </div>
      </div>

      <div className="bg-white border rounded-md shadow-md hover:shadow-lg transition-shadow duration-500 p-4 h-60">
        <Schedular />
      </div>
    </div>
  );
};

export default Dashboard;
