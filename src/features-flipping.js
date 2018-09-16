function IF(key, fnActive, fnInActive) {
  var active = false;
  if (typeof key === "function") {
    active = key();
  } else if (typeof key === "string") {
    active = userConfig[key];
  } else {
    active = key;
  }
  if (active) {
    fnActive();
  } else {
    if (fnInActive) {
      fnInActive();
    }
  }
}