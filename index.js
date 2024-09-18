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

let refreshTimeout;
const buttons = document.querySelectorAll("#pro1, #pro2, #pro3, #pro4");

function handleButtonClick(proId) {
  getSummary(proId);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.innerHTML));
});
