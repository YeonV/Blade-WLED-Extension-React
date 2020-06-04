document.querySelector('body').classList.add('yz');
chrome.runtime.sendMessage({
  type: 'setActiveIcon',
  data: true,
});
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
  obj['name'] = effectname;
  if (obj['CL']) {
    obj['useCL'] = true;
    obj['CL'] = obj['CL'].replace('h00', '');
  } else {
    obj['useCL'] = false;
    obj['CL'] = '000000';
  }
  if (obj['C2']) {
    obj['useC2'] = true;
    obj['C2'] = obj['C2'].replace('h00', '');
  } else {
    obj['useC2'] = false;
    obj['C2'] = '000000';
  }
  if (obj['C3']) {
    obj['useC3'] = true;
    obj['C3'] = obj['C3'].replace('h00', '');
  } else {
    obj['useC3'] = false;
    obj['C3'] = '000000';
  }
  obj['useFX'] = !!obj['FX'];
  obj['useFP'] = !!obj['FP'];
  obj['useIX'] = !!obj['IX'];
  obj['useSX'] = !!obj['SX'];
  obj['useNF'] = !!obj['NF'];
  obj['useEXTRA'] = !!obj['extra'];
  obj['useNL'] = !!obj['NL'];
  obj['useA'] = !!obj['A'];
  obj['useNT'] = !!obj['NT'];

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
    const sendObject = parseParams(
      elem.querySelector('.entry-content').innerText.trim(),
      elem.querySelector('.entry-title').innerText.trim()
    );

    chrome.runtime.sendMessage({
      type: 'yz3',
      data: sendObject,
    });
  };
}
