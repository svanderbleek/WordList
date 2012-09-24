var resourceful = require('resourceful');

resourceful.use('couchdb', {database: 'wordlist_test'});

var wordlist = resourceful.define('wordlist', function() {
  this.string('name');
  this.array('words');
});

wordlist.prototype.addWord = function(word) {
  this.words.push(word);
}

module.exports = wordlist 
