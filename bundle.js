'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _util = require('util');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_http2.default.createServer(function (req, res) {
  res.writeHead(200, {
    'myname': 'Margarita',
    'charset': 'utf-8'
  });
  if (req.url == '/quit') {
    process.exit();
  }
  if (req.url == '/stop') {
    process.nextTick(function () {
      throw new Error('Stop');
    });
  }
  if (req.url == '/time') {
    res.end((0, _moment2.default)().format("DD-MM-YYYY HH:mm"));
  }
  if (req.url == '/author') {
    res.end("Margarita Iakovleva");
  }
  //let regV = "/length\/g  [a-zA-Z0-9_]*";
  if (~req.url.indexOf("/length")) {
    if (req.url.length > 8) {
      var substr = req.url.substring(8).length + '';
      console.log(substr);
      res.end(substr);
    } else {
      res.end('0');
    }
  }
}).listen(4321, function () {
  return console.log('started');
});
