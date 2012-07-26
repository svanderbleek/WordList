localStorage = localStorage.words || JSON.stringify({});

document.body.addEventListener('dblclick', function() {
  var selected, word, definition, element, container, xhr, closeContainer;

  selected = window.getSelection();
  word = selected.toString();

  element = selected.anchorNode.parentNode;
  element.style.position = 'relative';

  container = document.createElement('div');
  container.setAttribute('id', 'wordlist-lookup-container');
  
  element.appendChild(container);

  closeContainer = function() {
    container.parentNode.removeChild(container);
    document.body.removeEventListener('click', closeContainer);
  }
  document.body.addEventListener('click', closeContainer);

  xhr = new XMLHttpRequest();
  xhr.open("GET", "http://www.spanishdict.com/translate/" + word, true);
  xhr.onload = function() {
    definition = xhr.response.querySelector(".quick_def").innerHTML;

    container.innerHTML = definition;

    container.addEventListener('click', function() {
      var words = JSON.parse(localStorage.words);
      words[word] = definition;
      localStorage.words = JSON.stringify(words);
    });
  }
  xhr.responseType = "document";
  xhr.send();
});
