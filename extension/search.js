(function () {
  var definitionRequest, openContainer, closeContainer;

  definitionRequest = function(word, url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
      var definition = xhr.response.querySelector(".quick_def").innerHTML;
    }
    xhr.responseType = "document";

    xhr.open("GET", url + word, true);
    xhr.send();
  }

  openContainer = function(selection) {
    var container, element; 

    element = selection.anchorNode.parentNode;
    element.style.position = 'relative';

    container = document.createElement('div');
    container.setAttribute('id', 'wordlist-lookup-container');
    
    element.appendChild(container);

    return container;
  }

  closeContainer = function(container) {
    container.parentNode.removeChild(container);
    document.body.removeEventListener('click', closeContainer);
  }

  document.body.addEventListener('dblclick', function() {
    var selection, word, definition, container;

    selection = window.getSelection();
    word = selected.toString();

    definition = definitionRequest(word, "bing-api-goes-here", function() {
      container = createContainer(selection);
      container.innerHTML = definition;
      document.body.addEventListener('click', function() {
        closeContainer(container);
      });
    });
  });

  this.WordList = this.WordList || {};
  this.WordList.extension = this.WordList.extension || {};
  this.WordList.extension.definitionRequest = definitionRequest;
}).call(this);
