import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import axios from "axios";
import type { MetaFunction } from "@remix-run/node";

// Lazy-loaded components
const ProjectSummary = lazy(() => import("../components/ProjectSummary"));
const Invoiced = lazy(() => import("../components/Invoiced"));
const ActionItems = lazy(() => import("../components/ActionItems"));
const SummaryPercentages = lazy(
  () => import("../components/SummaryPercentages")
);
const WorkInprogress = lazy(() => import("../components/WorkInprogress"));
const RecentPhotos = lazy(() => import("../components/RecentPhtotos"));
const Scheduler = lazy(() => import("../components/Schedular"));
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

// export default function Index() {
export default function Index({ projectId, userId, compId }: IndexProps) {
  // const projectId = "137389";
  // const compId = "408";
  // const userId = "50304";

  const [data, setData] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentProjectId, setCurrentProjectId] = useState(projectId);
  const [currentUserId, setCurrentUserId] = useState(userId);
  const [currentCompanyId, setCurrentCompanyId] = useState(compId);
  // const [currentLocation, setCurrentLocation] = useState(location);

  // const projectId = JSON.parse(localStorage.getItem("project"));

  console.log("projectID =======>>>>>>>>", currentProjectId);
  console.log("userId =======>>>>>>>>", currentUserId);
  console.log("COMPiD =======>>>>>>>>", currentCompanyId);

  // break second time api call or project change ====================>>>>>>>>>

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      console.log("Fetching data...");

      const formData = new FormData();
      formData.append("op", "get_project_detail");
      formData.append("project_id", currentProjectId.toString());
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
      formData.append("user_id", currentUserId);
      formData.append("company_id", currentCompanyId);

      const response = await axios.post(
        `https://api-cfdev.contractorforeman.net/service.php?opp=get_project_detail&c=${
          Number(currentCompanyId) ?? 0
        }&u=${Number(currentUserId) ?? 0}&p=manage_projects`,
        formData
      );

      console.log("Data fetched successfully", response?.data);
      const newData = response?.data?.data;

      setData(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [
    currentProjectId,
    currentCompanyId,
    currentUserId,
    projectId,
    userId,
    compId,
  ]);

  useEffect(() => {
    fetchData();

    // Check if there's a change in the project or user details
    const hasPropChanged =
      !data ||
      projectId !== currentProjectId ||
      userId !== currentUserId ||
      compId !== currentCompanyId;

    console.log(hasPropChanged);

    if (!data) {
      console.log("Props changed, fetching new data");

      // Call fetch data
      fetchData();

      // Update state after fetching data
      setCurrentProjectId(projectId);
      setCurrentUserId(userId);
      setCurrentCompanyId(compId);
    } else {
      console.log("No prop changes, skipping data fetch");
    }
  }, [projectId, userId, compId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p>{error}</p>
        <button
          onClick={fetchData}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
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
    <>
      <div className="space-y-4 p-4 overflow-y-auto sidebar" key={projectId}>
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
              <RecentPhotos data={data} />
            </Suspense>
          </div>
        </div>

        <div className={`${commonStyle} px-4 h-60`}>
          <Suspense fallback={<p>Loading Scheduler...</p>}>
            <Scheduler projectId={projectId} userId={userId} compId={compId} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
