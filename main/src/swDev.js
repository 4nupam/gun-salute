export default function swDev() {
  // Check if service workers are supported
  if ('serviceWorker' in navigator) {
    // Construct the service worker file URL
   let swUrl = `${import.meta.env.BASE_URL}sw.js`;


    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(swUrl)
        .then((response) => {
          console.log("Service Worker Registered: ", response);
        })
        .catch((error) => {
          console.error("Service Worker Registration Failed: ", error);
        });
    });
  } else {
    console.warn("Service Worker is not supported in this browser.");
  }
}
