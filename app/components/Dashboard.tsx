import { lazy, Suspense } from "react";
const ProjectSummary = lazy(() => import("./ProjectSummary"));
const Invoiced = lazy(() => import("./Invoiced"));
const ActionItems = lazy(() => import("./ActionItems"));
const SummaryPercentages = lazy(() => import("./SummaryPercentages"));
const WorkInprogress = lazy(() => import("./WorkInprogress"));
const RecentPhtotos = lazy(() => import("./RecentPhtotos"));
const Schedular = lazy(() => import("./Schedular"));
const Top = lazy(() => import("./Top"));

const Dashboard = (data: any) => {
  const {
    project_summary,
    wip_widget,
    customer_additional_contacts,
    billing_vs_actual,
  } = data?.data;

  const commonStyle = `bg-white border rounded-md  hover:shadow-lg transition-shadow duration-500`;

  return (
    <div className="space-y-4 p-4 overflow-y-auto sidebar ">
      <div className="w-full">
        <Suspense fallback={<p>Loading Project topbar...</p>}>
          <Top data={billing_vs_actual} />
        </Suspense>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        <div className={`${commonStyle} p-4`}>
          <Suspense fallback={<p>Loading Project Summary...</p>}>
            <ProjectSummary data={project_summary} />
          </Suspense>
        </div>
        <div className={`${commonStyle} px-4 pt-4`}>
          <Suspense fallback={<p>Loading Summary Percentages...</p>}>
            <SummaryPercentages data={data.data} />
          </Suspense>
        </div>
        <div className={`${commonStyle} px-4 pt-4`}>
          <Suspense fallback={<p>Loading Action Items...</p>}>
            <ActionItems />
          </Suspense>
        </div>
        {/* </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"> */}
        <div>
          <Suspense fallback={<p>Loading Invoiced...</p>}>
            <Invoiced
              data={billing_vs_actual}
              customer_additional_contacts={customer_additional_contacts}
            />
          </Suspense>
        </div>
        <div className={`${commonStyle} px-4 pt-4`}>
          <Suspense fallback={<p>Loading Work In Progress...</p>}>
            <WorkInprogress data={wip_widget} />
          </Suspense>
        </div>
        <div className={`${commonStyle} p-4 `}>
          <Suspense fallback={<p>Loading Recent Photos...</p>}>
            <RecentPhtotos data={data} />
          </Suspense>
        </div>
      </div>

      <div className={`${commonStyle} p-4 h-60`}>
        <Schedular />
      </div>
    </div>
  );
};

export default Dashboard;
