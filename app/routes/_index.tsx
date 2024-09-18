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
import { useFetchProjectDetails } from "~/hooks/usefetchProjectDetails";

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

export type IndexProps = {
  projectId: string;
  userId: string;
  compId: string;
};

export default function Index({ projectId, userId, compId }: IndexProps) {
  const { data, isLoading, error } = useFetchProjectDetails(
    projectId,
    userId,
    compId
  );

  console.log("projectID =======>>>>>>>>", projectId);
  console.log("userId =======>>>>>>>>", userId);
  console.log("COMPiD =======>>>>>>>>", compId);
  console.log("Loading =======>>>>>>>>", isLoading);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       Loading...
  //     </div>
  //   );
  // }

  if (!data) return;

  const {
    project_summary,
    wip_widget,
    customer_additional_contacts,
    billing_vs_actual,
  } = data;

  const commonStyle = `bg-white border rounded-md hover:shadow-lg transition-shadow duration-500`;

  return (
    <>
      <div
        className="space-y-4 p-4 overflow-y-auto sidebar"
        key={Math.random()}
      >
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
