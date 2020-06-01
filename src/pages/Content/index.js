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
  if (obj["CL"]) {
    obj["useCL"] = true
    obj["CL"] = obj["CL"].replace('h00','')
  } else {
    obj["useCL"] = false
    obj["CL"] = '000000'
  }
  if (obj["C2"]) {
    obj["useC2"] = true
     obj["C2"] = obj["C2"].replace('h00','')
  } else {
    obj["useC2"] = false
    obj["C2"] = '000000'
  }
  if (obj["C3"]) {
    obj["useC3"] = true
    obj["C3"] = obj["C3"].replace('h00','')     
  } else {
    obj["useC3"] = false
    obj["C3"] = '000000'
  }
  if (obj["FX"]) {
    obj["useFX"] = true
  } else {
    obj["useFX"] = false
  }
  if (obj["FP"]) {
    obj["useFP"] = true
  } else {
    obj["useFP"] = false
  }
  if (obj["IX"]) {
    obj["useIX"] = true
  } else {
    obj["useIX"] = false
  }
  if (obj["SX"]) {
    obj["useSX"] = true
  } else {
    obj["useSX"] = false
  }
  if (obj["NF"]) {
    obj["useNF"] = true
  } else {
    obj["useNF"] = false
  }
  if (obj["extra"]) {
    obj["useEXTRA"] = true
  } else {
    obj["useEXTRA"] = false
  }
  if (obj["NL"]) {
    obj["useNL"] = true
  } else {
    obj["useNL"] = false
  }
  if (obj["A"]) {
    obj["useA"] = true
  } else {
    obj["useA"] = false
  }
  if (obj["NT"]) {
    obj["useNT"] = true
  } else {
    obj["useNT"] = false
  }
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
