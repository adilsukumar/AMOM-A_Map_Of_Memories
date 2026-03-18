import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./index.css";

// Render the app immediately — never block on permissions
createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

// Request geolocation permission in the background after app loads
setTimeout(async () => {
  try {
    const { Geolocation } = await import('@capacitor/geolocation');
    const permissions = await Geolocation.checkPermissions();
    if (permissions.location === 'denied') {
      console.warn("Location permission denied");
    } else {
      await Geolocation.requestPermissions();
    }
  } catch (err) {
    console.warn("Geolocation init error:", err);
  }
}, 1000);

