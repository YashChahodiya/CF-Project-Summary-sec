function getSummery(proId, buildUrl, id) {
  async function loadComponent(
    workerScript,
    rootId,
    projectId,
    compId,
    userId
  ) {
    console.log("proId from html ======>>>>>>", proId);

    const root = document.getElementById(rootId);
    if (!root) {
      console.error("Root element not found.");
      return;
    }

    try {
      const worker = new Worker(workerScript, { type: "module" });
      const { renderComponent } = Comlink.wrap(worker);
      const html = await renderComponent({
        projectId,
        compId,
        userId,
      });
      root.innerHTML = html;

      worker.terminate();

      window.projectId = projectId;
      window.userId = userId;
      window.compId = compId;

      // Ensure dynamic import is properly awaited
      await import("./public/client/client.js");
    } catch (error) {
      console.error(`Error loading component: ${error}`);
      root.innerHTML = "Error loading component";
    }
  }

  // Replace with your own values or dynamic retrieval
  const projectId = proId;
  const compId = "408";
  const userId = "50304";

  loadComponent(buildUrl, id, projectId, compId, userId);
}

// Define `getSummery` before adding event listener
getSummery("137869", "./public/project/project.worker.js", "root1");

let refreshTimeout;
const refresh = document.getElementById("refresh");
const pro1 = document.getElementById("pro1");
const pro2 = document.getElementById("pro2");
const pro3 = document.getElementById("pro3");
const pro4 = document.getElementById("pro4");

function handleButtonClick(button, proId) {
  if (refreshTimeout) {
    clearTimeout(refreshTimeout);
  }

  refreshTimeout = setTimeout(() => {
    const root = document.getElementById("root1");
    if (root) {
      root.remove();
    }
    const roots = document.createElement("div");
    document.body.appendChild(roots).id = "root1";

    getSummery(proId, "./public/project/project.worker.js", "root1");
  }, 1000);
}

if (pro1)
  pro1.addEventListener("click", () => handleButtonClick(pro1, pro1.innerHTML));
if (pro2)
  pro2.addEventListener("click", () => handleButtonClick(pro2, pro2.innerHTML));
if (pro3)
  pro3.addEventListener("click", () => handleButtonClick(pro3, pro3.innerHTML));
if (pro4)
  pro4.addEventListener("click", () => handleButtonClick(pro4, pro4.innerHTML));
