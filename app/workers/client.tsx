import React from "react";
import { hydrateRoot } from "react-dom/client";
import Index from "../routes/_index";

const hydrateComponent = (
  Component: React.ComponentType<any>,
  containerId: string,
  projectId: string,
  userId: string,
  compId: string,
  location: string
) => {
  const container = document.getElementById(containerId);
  if (container) {
    hydrateRoot(
      container,
      <Component
        projectId={projectId}
        userId={userId}
        compId={compId}
        location={location}
      />
    );
  }
};

// Get the IDs and initial data from the window object
const projectId = JSON.parse(localStorage.getItem("project")) ?? "0";
const userId = (window as any).userId;
const compId = (window as any).compId;
const location = (window as any).currLocation;

// set current projectID
localStorage.setItem("currProject", projectId);

hydrateComponent(Index, "root1", projectId, userId, compId, location);
