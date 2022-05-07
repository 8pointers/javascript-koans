import finalhandler from 'finalhandler';
import http from 'http';
import { promisify } from 'util';
import serveStatic from 'serve-static';

const serve = function (port) {
  beforeAll(function () {
    const serve = serveStatic(__dirname);
    const server = http.createServer(function onRequest(req, res) {
      serve(req, res, finalhandler(req, res));
    });
    server.listen(port);
    afterAll(promisify(server.close.bind(server)));
  });
};

module.exports = serve;
