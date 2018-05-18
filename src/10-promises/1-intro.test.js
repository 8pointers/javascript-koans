/**
 * @jest-environment node
 */
const finalhandler = require('finalhandler');
const http = require('http');
const { promisify } = require('util');
const serveStatic = require('serve-static');
const fetch = require('node-fetch');

describe('Promises', function() {
  let close;
  beforeAll(function() {
    const serve = serveStatic(__dirname);
    const server = http.createServer(function onRequest(req, res) {
      serve(req, res, finalhandler(req, res));
    });
    server.listen(3001);
    close = promisify(server.close);
  });
  afterAll(close);

  test('1 - should understand then', function() {
    return fetch('http://localhost:3001/data/leaderboard.json')
      .then(response => response.json())
      .then(leaderboard => expect(leaderboard).toEqual(__));
  });
  test('2 - should understand then', function() {
    return fetch('http://localhost:3001/data/player/1.json')
      .then(response => response.json())
      .then(leaderboard => expect(leaderboard).toEqual(__));
  });
});
