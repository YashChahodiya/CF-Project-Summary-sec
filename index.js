function getSummery(proId) {
  async function loadComponent(
    workerScript,
    rootId,
    projectId,
    compId,
    userId,
    location
  ) {
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
        location,
      });
      root.innerHTML = html;

      worker.terminate();

      window.projectId = projectId;
      window.userId = userId;
      window.compId = compId;
      window.currLocation = location;

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
  const location = window.location.href;

  loadComponent(
    "./public/project/project.worker.js",
    "root1",
    projectId,
    compId,
    userId,
    location
  );
}

// Define `getSummery` before adding event listener
getSummery();

let refreshTimeout;
const refresh = document.getElementById("refresh");
const pro1 = document.getElementById("pro1");
const pro2 = document.getElementById("pro2");
const pro3 = document.getElementById("pro3");
const pro4 = document.getElementById("pro4");

if (pro1) {
  pro1.addEventListener("click", () => {
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }

    refreshTimeout = setTimeout(() => {
      const proId = Number(pro1.innerHTML);
      window.localStorage.setItem("project", proId);

      window.location.href += `?projectId=${proId}`;

      getSummery(proId);
    }, 300); // Adjust the delay as needed
  });
}
if (pro2) {
  pro2.addEventListener("click", () => {
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }

    refreshTimeout = setTimeout(() => {
      const proId = Number(pro2.innerHTML);
      window.localStorage.setItem("project", proId);
      window.location.href += `?projectId=${proId}`;
      getSummery(proId);
    }, 300); // Adjust the delay as needed
  });
}
if (pro3) {
  pro3.addEventListener("click", () => {
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }

    refreshTimeout = setTimeout(() => {
      const proId = Number(pro3.innerHTML);
      window.localStorage.setItem("project", proId);
      window.location.href += `?projectId=${proId}`;
      getSummery(proId);
    }, 300); // Adjust the delay as needed
  });
}
if (pro4) {
  pro4.addEventListener("click", () => {
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }

    refreshTimeout = setTimeout(() => {
      const proId = Number(pro4.innerHTML);
      window.localStorage.setItem("project", proId);
      // window.location.href = `http://127.0.0.1:5501/index.html?projectId=${proId}`;

      getSummery(proId);
    }, 300); // Adjust the delay as needed
  });
}
