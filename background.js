function openAnalyzerPage(url) {
  if (validSiteURL(url)) {
    chrome.tabs.create({
      url: 'https://tinypng.com/analyzer#' + url
    });
  }
}

function validSiteURL(url) {
  if (url.substring(0, 28) == 'https://tinypng.com/analyzer' ) {
    return false
  } else if (url.substring(0, 8) == 'https://' ) {
    return true
  } else if (url.substring(0, 7) == 'http://' ) {
    return true
  } else {
    return false
  }
}

chrome.browserAction.onClicked.addListener((tab) => {
  openAnalyzerPage(tab.url)
});
