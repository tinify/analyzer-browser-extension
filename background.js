function openAnalyzerPage(url) {
  chrome.tabs.create({
    url: 'https://tinypng.com/analyzer#' + url
  });
}

chrome.browserAction.onClicked.addListener((tab) => {
  openAnalyzerPage(tab.url)
});
