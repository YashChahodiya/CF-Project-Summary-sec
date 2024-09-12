import React from "react";
import { hydrateRoot } from "react-dom/client";
import Index from "../routes/_index";

const hydrateComponent = (
  Component: React.ComponentType<any>,
  containerId: string,
  projectId: string,
  userId: string,
  compId: string,
  initialData: any
) => {
  const container = document.getElementById(containerId);
  if (container) {
    hydrateRoot(
      container,
      <Component
        projectId={projectId}
        userId={userId}
        compId={compId}
        initialData={initialData}
      />
    );
  }
};

// Get the IDs and initial data from the window object
const projectId = (window as any).projectId;
const userId = (window as any).userId;
const compId = (window as any).compId;
const initialData = (window as any).initialData;

hydrateComponent(Index, "root1", projectId, userId, compId, initialData);
