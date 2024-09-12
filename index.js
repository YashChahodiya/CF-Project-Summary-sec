// function getSummery() {
//   async function loadComponent(
//     workerScript,
//     rootId,
//     projectId,
//     compId,
//     userId
//   ) {
//     const root = document.getElementById(rootId);
//     try {
//       const worker = new Worker(workerScript, { type: "module" });
//       const { renderComponent } = Comlink.wrap(worker);
//       const html = await renderComponent({
//         projectId: projectId,
//         compId: compId,
//         userId: userId,
//       });
//       root.innerHTML = html;

//       worker.terminate();

//       // Set the values on the window object
//       window.projectId = projectId;
//       window.userId = userId;
//       window.compId = compId;

//       await import("./public/client/client.js");
//     } catch (error) {
//       console.error(`Error loading component: ${error}`);
//       root.innerHTML = "Error loading component";
//     }
//   }

//   const projectId = "137869" || 0;
//   const compId = "408" || 0;
//   const userId = "50304" || 0;

//   loadComponent(
//     "./public/project/project.worker.js",
//     "root1",
//     projectId,
//     compId,
//     userId
//   );
// }

// getSummery();

// const refresh = document.getElementById("refresh");

// refresh.addEventListener("click", () => {
//   // Remove the existing div
//   const root = document.getElementById("root1");
//   if (root) {
//     root.remove();
//   }

//   // Create a new div and set its id to 'root1'
//   const newRoot = document.createElement("div");
//   newRoot.id = "root1";

//   document.body.appendChild(newRoot);

//   getSummery();
// });

// Modify the getSummery function
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

      // Wait for the next frame to ensure DOM is updated
      await import("./public/client/client.js");
      // requestAnimationFrame(async () => {
      //   // Initialize or update charts here
      //   initializeCharts();
      // });
    } catch (error) {
      console.error(`Error loading component: ${error}`);
      root.innerHTML = "Error loading component";
    }
  }

  const projectId = "137869" || 0;
  const compId = "408" || 0;
  const userId = "50304" || 0;

  loadComponent(
    "./public/project/project.worker.js",
    "root1",
    projectId,
    compId,
    userId
  );
}

// Add this function to initialize or update charts
function initializeCharts() {
  // Ensure data is available
  if (!window.chartData) {
    console.error("Chart data is not available");
    return;
  }

  // Example: Update an ApexCharts instance
  if (window.apexChart) {
    window.apexChart.updateOptions({
      series: window.chartData.series,
      // Add other options as needed
    });
  } else {
    // Initialize a new ApexCharts instance
    window.apexChart = new ApexCharts(document.querySelector("#chart"), {
      series: window.chartData.series,
      chart: {
        type: "line",
        height: 350,
      },
    });
    window.apexChart.render();
  }
}

getSummery();

// Modify the refresh event listener
refresh.addEventListener("click", () => {
  // Remove the existing div
  const root = document.getElementById("root1");
  if (root) {
    root.remove();
  }

  // Create a new div and set its id to 'root1'
  const newRoot = document.createElement("div");
  newRoot.id = "root1";

  document.body.appendChild(newRoot);

  // Clear existing chart instances
  if (window.apexChart) {
    console.log(window.apexChart);
    window.apexChart.destroy();
    window.apexChart = null;
  }

  getSummery();
});
