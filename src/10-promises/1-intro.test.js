/**
 * @jest-environment node
 */
const finalhandler = require('finalhandler');
const http = require('http');
const { promisify } = require('util');
const serveStatic = require('serve-static');
const fetch = require('node-fetch');

describe('Promises', function() {
  const port = 3001;
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

  test('1 - should understand then', function() {
    return getResource('data/leaderboard.json').then(leaderboard =>
      expect(leaderboard).toEqual([5, 3, 2, 4, 1])
    );
  });
  test('2 - should understand then', function() {
    return getResource('data/player/1.json').then(leaderboard =>
      expect(leaderboard).toEqual({ name: 'Alice' })
    );
  });
});
