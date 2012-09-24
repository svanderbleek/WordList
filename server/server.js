var flatiron = require('flatiron'),
  app = flatiron.app,
  restful = require('./lib/restful'),
  wordlist = require('./src/wordlist');

app.use(flatiron.plugins.http);
app.use(restful);

/*
app.router.get('/', function () {
  this.res.writeHead(200, {'Content-Type': 'application/json'});
  this.res.end();
});

app.router.get('/lists', function () {
  self = this;
  wordlist.all(function(e, lists) {
    self.res.writeHead(200, {'Content-Type': 'application/json'});
    self.res.end(JSON.stringify({lists: lists}));
  });
});

app.router.get('/lists/:name', function (name) {
  this.res.writeHead(404, { 'Content-Type': 'application/json' });
  this.res.end(JSON.stringify({list: {name: name}}));
});

app.router.put('/lists/:name', function(name) {
  self = this;
  wordlist.create({name: name, words: []}, function(e, result){
    self.res.end(JSON.stringify(result));
  });
});
*/

app.start(8080, function() {
  console.log(app.router.routes);
});
