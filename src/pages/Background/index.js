import '../../assets/img/icon-128.png';
import '../../assets/img/yz.png';

console.log('This is the background page.');
console.log('Put the background !!!!!!!!scripts here.');
window.chrome.tabs.onActivated.addListener(function (activeInfo) {
  window.chrome.tabs.get(activeInfo.tabId, function (tab) {
    console.log('This is the background page.');
    if (tab.url === 'https://wled.yeonv.com/') {
      console.log('From BG: WLED');
      chrome.browserAction.setIcon({ path: 'yz.png' });
      // chrome.tabs.executeScript(null, {file: 'inject.js'}, function(url) {});
    } else {
      chrome.browserAction.setIcon({ path: 'icon-128.png' });
      console.log('From BG: NOT WLED');
    }
  });
});
window.chrome.runtime.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  console.log('GOT req', request);
  if (request.type === 'yz') {
    console.log('GOT YZ');
    fetch(request.url);
  }
  sendResponse();
});
