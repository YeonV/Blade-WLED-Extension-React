document.querySelector('body').classList.add('yz');
const parseParams = (querystring, effectname) => {

  // parse query string
  const params = new URLSearchParams(querystring);

  const obj = {};

  // iterate over all keys
  for (const key of params.keys()) {
      if (params.getAll(key).length > 1) {
          obj[key] = params.getAll(key);
      } else {
          obj[key] = params.get(key);
      }
  }
  obj["name"] = effectname;
  return obj;
};

var anchors = document.querySelectorAll('article');
for (let z = 0; z < anchors.length; z++) {
  let elem = anchors[z];
  elem.querySelector('.read-more').onclick = function () {
    chrome.runtime.sendMessage({
      type: 'yz',
      url: `/win${elem.querySelector('.entry-content').innerText.trim()}`,
    });
  };
  elem.querySelector('.yz-copy').onclick = function () {

    const sendObject = parseParams(elem.querySelector('.entry-content').innerText.trim(), elem.querySelector('.entry-title').innerText.trim());

    chrome.runtime.sendMessage({
      type: 'yz3',
      data: sendObject
    });
  };
}
