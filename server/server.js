var flatiron = require('flatiron'),
  app = flatiron.app;

app.use(flatiron.plugins.http);

app.router.get('/', function () {
  this.res.writeHead(200, { 'Content-Type': 'application/json' });
  this.res.end();
});

app.router.get('/lists', function () {
  this.res.writeHead(200, { 'Content-Type': 'application/json' });
  this.res.end(JSON.stringify({lists:[]}));
});

app.router.get('/lists/:name', function (name) {
  this.res.writeHead(404, { 'Content-Type': 'application/json' });
  this.res.end(JSON.stringify({list:{name: name}}));
});

app.start(8080);
