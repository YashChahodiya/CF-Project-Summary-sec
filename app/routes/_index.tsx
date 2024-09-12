import type { MetaFunction } from "@remix-run/node";
import axios from "axios";
import { lazy, Suspense, useEffect, useState } from "react";

const ProjectSummary = lazy(() => import("../components/ProjectSummary"));
const Invoiced = lazy(() => import("../components/Invoiced"));
const ActionItems = lazy(() => import("../components/ActionItems"));
const SummaryPercentages = lazy(
  () => import("../components/SummaryPercentages")
);
const WorkInprogress = lazy(() => import("../components/WorkInprogress"));
const RecentPhtotos = lazy(() => import("../components/RecentPhtotos"));
const Schedular = lazy(() => import("../components/Schedular"));
const Top = lazy(() => import("../components/Top"));

export const meta: MetaFunction = () => {
  return [
    { title: "Project Dashboard" },
    { name: "description", content: "Project management dashboard" },
  ];
};

interface ProjectData {
  project_summary: any;
  wip_widget: any;
  customer_additional_contacts: any;
  billing_vs_actual: any;
}

export type IndexProps = {
  projectId: string;
  userId: string;
  compId: string;
};

export default function Index({ projectId, userId, compId }: IndexProps) {
  const [data, setData] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log("projectID", projectId);
  console.log("userId", userId);
  console.log("compId", compId);

  const fetchData = async () => {
    try {
      if (data) {
        setIsLoading(false);
      }
      // const cachedData = localStorage.getItem("projectData");
      // if (cachedData) {
      //   setData(JSON.parse(cachedData));
      //   setIsLoading(false);
      // }

      const formData = new FormData();
      formData.append("op", "get_project_detail");
      formData.append("project_id", projectId);
      formData.append("is_refresh", "0");
      formData.append("record_type", "project");
      formData.append("version", "web");
      formData.append("from", "panel");
      formData.append("iframe_call", "0");
      formData.append("tz", "+5:30");
      formData.append("tzid", "Asia/Calcutta");
      formData.append("curr_time", new Date().toISOString());
      formData.append("force_login", "0");
      formData.append("global_project", "");
      formData.append("user_id", userId);
      formData.append("company_id", compId);

      const response = await axios.post(
        `https://api-cfdev.contractorforeman.net/service.php?opp=get_project_detail&c=${Number(
          compId
        )}&u=${Number(userId)}&p=manage_projects`,
        formData
      );

      const newData = response?.data?.data;
      setData(newData);
      setIsLoading(false);

      // localStorage.setItem("projectData", JSON.stringify(newData));
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        No data available
      </div>
    );
  }

  const {
    project_summary,
    wip_widget,
    customer_additional_contacts,
    billing_vs_actual,
  } = data;

  const commonStyle = `bg-white border rounded-md hover:shadow-lg transition-shadow duration-500`;

  return (
    <div className="space-y-4 p-4 overflow-y-auto sidebar">
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
            <SummaryPercentages data={data} />
          </Suspense>
        </div>
        <div className={`${commonStyle} px-4 pt-4`}>
          <Suspense fallback={<p>Loading Action Items...</p>}>
            <ActionItems
              projectId={projectId}
              userId={userId}
              compId={compId}
            />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<p>Loading Invoiced...</p>}>
            <Invoiced
              data={data}
              customer_additional_contacts={customer_additional_contacts}
            />
          </Suspense>
        </div>
        <div className={`${commonStyle} px-4 pb-2 lg:pt-4`}>
          <Suspense fallback={<p>Loading Work In Progress...</p>}>
            <WorkInprogress data={wip_widget} />
          </Suspense>
        </div>
        <div className={`${commonStyle} p-4`}>
          <Suspense fallback={<p>Loading Recent Photos...</p>}>
            <RecentPhtotos data={data} />
          </Suspense>
        </div>
      </div>

      <div className={`${commonStyle} px-4 h-60`}>
        <Suspense fallback={<p>Loading Scheduler...</p>}>
          <Schedular projectId={projectId} userId={userId} compId={compId} />
        </Suspense>
      </div>
    </div>
  );
}
