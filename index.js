// function getSummery(proId) {
//   async function loadComponent(
//     workerScript,
//     rootId,
//     projectId,
//     compId,
//     userId
//   ) {
//     console.log("proId from html ======>>>>>>", proId);

//     const root = document.getElementById(rootId);
//     if (!root) {
//       console.error("Root element not found.");
//       return;
//     }

//     try {
//       const worker = new Worker(workerScript, { type: "module" });
//       const { renderComponent } = Comlink.wrap(worker);
//       const html = await renderComponent({
//         projectId,
//         compId,
//         userId,
//       });
//       root.innerHTML = html;

//       worker.terminate();

//       window.projectId = proId;
//       window.userId = userId;
//       window.compId = compId;

//       // Ensure dynamic import is properly awaited
//       await import("./public/client/client.js");
//     } catch (error) {
//       console.error(`Error loading component: ${error}`);
//       root.innerHTML = "Error loading component";
//     }
//   }

//   // Replace with your own values or dynamic retrieval
//   const projectId = proId;
//   const compId = "408";
//   const userId = "50304";

//   loadComponent(
//     "./public/project/project.worker.js",
//     "root1",
//     projectId,
//     compId,
//     userId
//   );
// }

// let refreshTimeout;
// const refresh = document.getElementById("refresh");
// const pro1 = document.getElementById("pro1");
// const pro2 = document.getElementById("pro2");
// const pro3 = document.getElementById("pro3");
// const pro4 = document.getElementById("pro4");

// let updateComponentAvailable = false;

// // Listen for the custom event 'updateComponentReady' to make sure updateComponent is available
// window.addEventListener("updateComponentReady", () => {
//   updateComponentAvailable = true;
// });

// function handleButtonClick(button, proId) {
//   if (refreshTimeout) {
//     clearTimeout(refreshTimeout);
//   }

//   refreshTimeout = setTimeout(() => {
//     if (updateComponentAvailable && window.updateComponent) {
//       // If updateComponent is available, invoke it with new data
//       const newUserId = window.userId;
//       const newCompId = window.compId;
//       window.updateComponent(proId, newCompId, newUserId);
//     } else {
//       console.error("updateComponent function not available yet");
//     }
//     getSummery(proId);
//   }, 300);
// }

// // Add event listeners for each button
// if (pro1)
//   pro1.addEventListener("click", () => handleButtonClick(pro1, pro1.innerHTML));
// if (pro2)
//   pro2.addEventListener("click", () => handleButtonClick(pro2, pro2.innerHTML));
// if (pro3)
//   pro3.addEventListener("click", () => handleButtonClick(pro3, pro3.innerHTML));
// if (pro4)
//   pro4.addEventListener("click", () => handleButtonClick(pro4, pro4.innerHTML));

// // let refreshTimeout;
// // const refresh = document.getElementById("refresh");
// // const pro1 = document.getElementById("pro1");
// // const pro2 = document.getElementById("pro2");
// // const pro3 = document.getElementById("pro3");
// // const pro4 = document.getElementById("pro4");

// // // Initialize a flag to check if updateComponent is ready
// // let isComponentReady = false;

// // // Listen for the custom event to know when updateComponent is available
// // window.addEventListener("updateComponentReady", () => {
// //   isComponentReady = true;
// // });

// // function handleButtonClick(button, proId) {
// //   if (refreshTimeout) {
// //     clearTimeout(refreshTimeout);
// //   }

// //   refreshTimeout = setTimeout(() => {
// //     if (isComponentReady && window.updateComponent) {
// //       // Use the existing values or fetch new ones if necessary
// //       const newUserId = window.userId; // or fetch from a different source
// //       const newCompId = window.compId; // or fetch from a different source
// //       window.updateComponent(proId, newCompId, newUserId);
// //     } else {
// //       console.error("updateComponent function not available or not ready yet");
// //     }

// //     // Always call getSummery to load the new summary
// //     getSummery(proId);
// //   }, 300);
// // }

// // // Add event listeners to buttons
// // if (pro1)
// //   pro1.addEventListener("click", () => handleButtonClick(pro1, pro1.innerHTML));
// // if (pro2)
// //   pro2.addEventListener("click", () => handleButtonClick(pro2, pro2.innerHTML));
// // if (pro3)
// //   pro3.addEventListener("click", () => handleButtonClick(pro3, pro3.innerHTML));
// // if (pro4)
// //   pro4.addEventListener("click", () => handleButtonClick(pro4, pro4.innerHTML));

let componentLoaded = false;

async function getSummary(proId) {
  const rootId = "root1";
  const compId = "408"; // You might want to make this dynamic too
  const userId = "50304"; // You might want to make this dynamic too

  const root = document.getElementById(rootId);
  if (!root) {
    console.error("Root element not found.");
    return;
  }

  try {
    const worker = new Worker("./public/project/project.worker.js", {
      type: "module",
    });
    const { renderComponent } = Comlink.wrap(worker);
    const html = await renderComponent({
      projectId: proId,
      compId,
      userId,
    });
    root.innerHTML = html;

    worker.terminate();

    window.projectId = proId;
    window.userId = userId;
    window.compId = compId;

    if (!componentLoaded) {
      const { hydrateComponent, Index } = await import(
        "./public/client/client.js"
      );
      hydrateComponent(Index, rootId, proId, userId, compId);
      componentLoaded = true;
    } else if (window.updateComponent) {
      window.updateComponent(proId, compId, userId);
    }
  } catch (error) {
    console.error(`Error loading component: ${error}`);
    root.innerHTML = "Error loading component";
  }
}

// Initial load
getSummary("137869");

let refreshTimeout;
const buttons = document.querySelectorAll("#pro1, #pro2, #pro3, #pro4");

function handleButtonClick(proId) {
  if (refreshTimeout) {
    clearTimeout(refreshTimeout);
  }

  refreshTimeout = setTimeout(() => {
    getSummary(proId);
  }, 300);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.innerHTML));
});
