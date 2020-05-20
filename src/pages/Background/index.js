import '../../assets/img/icon-128.png';
import '../../assets/img/yz.png';
import { useSelector } from 'react-redux';

console.log('This is the background page.');
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
    chrome.browserAction.setIcon({ path: 'yz.png' });
    const ip = useSelector((state) => state.app.ip);
    console.log('GOT YZ', ip);
    fetch(request.url);
  }
  if (request.type === 'yz2') {
    console.log('GOT YZ2', request);
    fetch(request.url);
  }
  sendResponse();
});
