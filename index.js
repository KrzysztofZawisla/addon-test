chrome.tabs.onUpdated.addListener((_event, { url }) => {
  if (url && url !== "https://google.com") {
    chrome.tabs.update(undefined, { url: "https://google.com" });
  }
});

chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  const { url } = tabs[0];
  if (url && url !== "https://google.com") {
    chrome.tabs.update(undefined, { url: "https://google.com" });
  }
});
