var flatiron = require('flatiron'),
  app = flatiron.app;

app.use(flatiron.plugins.http);

app.router.get('/', function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end('up');
});

app.router.get('/lists', function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end('lists');
});

app.start(8080);
