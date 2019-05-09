var data = {
  placement: "",
  campaign: "",
  width: "",
  height: "",
  amplib: "https://cdn.ampproject.org/v0.js",
  dc: ""
}


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


data.placement = getParameterByName("placement") || "1da8762f498bf26301acdd9a2477b833";
data.campaign = getParameterByName("campaign") || "";
data.width = getParameterByName("width") || "300";
data.height = getParameterByName("height") || "250";
data.dc = getParameterByName("env") || "";
