var flatiron = require('flatiron'),
  app = flatiron.app,
  restful = require('./lib/restful'),
  resources = require('./src/resources');

var app = flatiron.app;
app.resources = resources;

app.use(flatiron.plugins.http);

app.use(restful, {strict: true, prefix: 'api', explore: false});

app.start(8080, function() {
  console.log(app.router.routes);
});
