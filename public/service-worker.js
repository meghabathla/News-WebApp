self.addEventListener("periodicsync", async (event) => {
  if (event.tag === "news-sync") {
    event.waitUntil(syncNews());
  }
});

async function syncNews() {
  try {
    const response = await fetch("/api/news-latest");
    const data = await response.json();
    // Optionally, store in IndexedDB or Cache API
    // self.registration.showNotification('News updated!');
  } catch (e) {
    // Handle errors
    console.error("Background sync failed:", e);
  }
}
