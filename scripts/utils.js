function get_opt_from_url() {
  var query = document.location.href.split('?')[1] || '';
  var vars = query.split('&');
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    if (typeof query_string[key] === 'undefined') {
      query_string[key] = decodeURIComponent(value);
    } else if (typeof query_string[key] === 'string') {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}

function set_opt_in_url() {
  return '?' + Array.from(document.querySelectorAll('[data-bind]')).map((i) => {
    return i.getAttribute('data-bind') + '=' + (i.type === 'checkbox' ? i.checked : i.value)
  }).join('&');
}

function set_opt_in_form() {
  let ob = get_opt_from_url();
  if(ob[''] === 'undefined') return
  for(var key in ob) {
    if(document.querySelector('[data-bind="' + key + '"]').type === 'checkbox') { document.querySelector('[data-bind="' + key + '"]').checked = JSON.parse(ob[key]) }
    else {document.querySelector('[data-bind="' + key + '"]').value = ob[key]}
  }
}

document.getElementById('generate').onclick = function() {
  document.location.href = document.location.href.split('?')[0] + set_opt_in_url();
}

function set_viewability(bool = false) {
  bool ? document.getElementById('ad_container').setAttribute('data-viewtest', bool.toString()) : document.getElementById('ad_container').setAttribute('data-viewtest', bool.toString());
}


window.onload = function() {
  set_opt_in_form()
  set_viewability(get_opt_from_url().viewability)
}
