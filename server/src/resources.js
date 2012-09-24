var resourceful = require('resourceful');

resourceful.use('couchdb', {database: 'wordlist_test'});

exports.WordList = resourceful.define('wordlist', function() {
  this.restful = true;
  this.string('id');
  this.array('words');
});

exports.WordList.prototype.addWord = function(word) {
  this.words.push(word);
}

