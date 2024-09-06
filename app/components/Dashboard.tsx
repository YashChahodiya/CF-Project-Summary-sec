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
