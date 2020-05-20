console.log('test', document.querySelector('body').classList.add('yz'));

var anchors = document.querySelectorAll('article');
for (let z = 0; z < anchors.length; z++) {
  let elem = anchors[z];
  elem.querySelector('.read-more').onclick = function () {
    console.log('click', window.ip);
    chrome.runtime.sendMessage({
      type: 'yz',
      url: `http://${window.ip}/win${elem
        .querySelector('.entry-content')
        .innerText.trim()}`,
    });
  };
}
