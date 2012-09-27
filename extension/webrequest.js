(function() { 
  var makeQuery = function(data) {
    var params = []; 

    for(key in data) { 
      params.push(key+"="+encodeURIComponent(object[key])); 
    } 

    return params.join("&"); 
  }

  var webRequest = function(options) {};
    var xhr = new XMLHttpRequest();

    options.method = options.method || "GET";

    xhr.onload = options.callback; 

    xhr.open(options.method, options.url, true);

    xhr.send();
  }

  addEventListener("WebRequest", function(event) {
    webRequest(event.
  
  });
).call(this);
