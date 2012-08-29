(function () {
  localStorage.words = localStorage.words || JSON.stringify({});

  function storeWord(word) {
    var words = JSON.parse(localStorage.words);
    words[word] = definition;
    localStorage.words = JSON.stringify(words);
  }

  function definitionRequest(word, url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
      var definition = xhr.response.querySelector(".quick_def").innerHTML;
      callback(definition);
    }
    xhr.responseType = "document";

    xhr.open("GET", url + word, true);
    xhr.send();
  }

  var openContainer = function(selection) {
    var container, element; 

    element = selection.anchorNode.parentNode;
    element.style.position = 'relative';

    container = document.createElement('div');
    container.setAttribute('id', 'wordlist-lookup-container');
    
    element.appendChild(container);

    return container;
  }

  var closeContainer = function(container) {
    container.parentNode.removeChild(container);
    document.body.removeEventListener('click', closeContainer);
  }

  document.body.addEventListener('dblclick', function() {
    var selection, word, definition, container;

    selection = window.getSelection();
    word = selected.toString();

    definition = definitionRequest(word, "http://www.spanishdict.com/translate/", function() {
      container = createContainer(selection);
      container.innerHTML = definition;
      document.body.addEventListener('click', function() {
        closeContainer(container);
      });
    });
  });
).call(this);
