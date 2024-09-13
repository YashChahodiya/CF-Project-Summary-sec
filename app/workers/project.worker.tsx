import * as Comlink from "comlink";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Index from "../routes/_index";

const renderComponent = ({
  projectId,
  userId,
  compId,
  location,
}: {
  projectId: string;
  userId: string;
  compId: string;
  location: string;
}) => {
  const html = ReactDOMServer.renderToString(
    <Index
      projectId={projectId}
      userId={userId}
      compId={compId}
      location={location}
    />
  );
  return html;
};

Comlink.expose({ renderComponent });
