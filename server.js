var liveServer = require('live-server');

var params = {
  port: 8181,
  host: "0.0.0.0",
  root: "./src/",
  open: true,
  ignore: 'scss,my/templates',
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  mount: [['/components', './node_modules']], // Mount a directory to a route.
  logLevel: 1, // 0 = errors only, 1 = some, 2 = lots
  middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);
