function getSummery() {
  async function loadComponent(
    workerScript,
    rootId,
    projectId,
    compId,
    userId
  ) {
    const root = document.getElementById(rootId);
    try {
      const worker = new Worker(workerScript, { type: "module" });
      const { renderComponent } = Comlink.wrap(worker);
      const html = await renderComponent({
        projectId: projectId,
        compId: compId,
        userId: userId,
      });
      root.innerHTML = html;

      worker.terminate();

      // Set the values on the window object
      window.projectId = projectId;
      window.userId = userId;
      window.compId = compId;

      await import("./public/client/client.js");
    } catch (error) {
      console.error(`Error loading component: ${error}`);
      root.innerHTML = "Error loading component";
    }
  }

  const projectId = "137869";
  const compId = "408";
  const userId = "50304";

  loadComponent(
    "./public/project/project.worker.js",
    "root1",
    projectId,
    compId,
    userId
  );
}

getSummery();

const refresh = document.getElementById("refresh");

refresh.addEventListener("click", () => {
  getSummery();
});
