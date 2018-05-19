/**
 * @jest-environment node
 */
const finalhandler = require('finalhandler');
const http = require('http');
const { promisify } = require('util');
const serveStatic = require('serve-static');
const fetch = require('node-fetch');

describe('Promise.all', function() {
  const port = 3006;
  let close;
  beforeAll(function() {
    const serve = serveStatic(__dirname);
    const server = http.createServer(function onRequest(req, res) {
      serve(req, res, finalhandler(req, res));
    });
    server.listen(port);
    close = promisify(server.close.bind(server));
  });
  afterAll(() => close());
  const getResource = url =>
    fetch(`http://localhost:${port}/${url}`).then(response => response.json());

  test('should understand Promise.all', function() {
    return Promise.all([
      getResource('data/player/1.json'),
      getResource('data/player/7.json')
    ]).then(result => expect(result).toEqual(__));
  });

  test('should understand how Promise.all deals with rejections', function() {
    return Promise.all([
      getResource('data/player/brake-it.json'),
      getResource('data/player/7.json')
    ]).catch(reason => expect(reason).toEqual(__));
  });
});
