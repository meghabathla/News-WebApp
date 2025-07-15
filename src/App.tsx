import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Index from "./pages";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (
      "serviceWorker" in navigator &&
      "periodicSync" in
        (navigator.serviceWorker as ServiceWorkerContainer & {
          periodicSync?: any;
        })
    ) {
      (
        navigator.serviceWorker as ServiceWorkerContainer & {
          periodicSync?: any;
        }
      ).ready.then(async (registration) => {
        try {
          await (registration as any).periodicSync.register("news-sync", {
            minInterval: 15 * 60 * 1000, // 15 minutes
          });
        } catch (e) {
          // Handle error or lack of permission
          console.log("Periodic Sync registration failed:", e);
        }
      });
    }
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
