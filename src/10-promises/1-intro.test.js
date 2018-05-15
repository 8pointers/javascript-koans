/**
 * @jest-environment node
 */
const finalhandler = require('finalhandler');
const http = require('http');
const serveStatic = require('serve-static');
const fetch = require('node-fetch');

describe('Promises', function () {
  let server;
  beforeAll(function () {
    const serve = serveStatic(__dirname);
    server = http.createServer(function onRequest(req, res) {
      serve(req, res, finalhandler(req, res));
    });
    server.listen(3000);
  });
  afterAll(() => server.close());

  test('should work', function() {
    return fetch('http://localhost:3000/data/leaderboard.json')
      .then(response => response.json())
      .then(leaderboard => expect(leaderboard).toEqual(__));
  });
  test('should work', function() {
    return fetch('http://localhost:3000/data/player/1.json')
      .then(response => response.json())
      .then(leaderboard => expect(leaderboard).toEqual(__));
  });
});

