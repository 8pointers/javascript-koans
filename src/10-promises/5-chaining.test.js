/**
 * @jest-environment node
 */
const finalhandler = require('finalhandler');
const http = require('http');
const { promisify } = require('util');
const serveStatic = require('serve-static');
const fetch = require('node-fetch');

describe('Chaining', function() {
  let close;
  beforeAll(function() {
    const serve = serveStatic(__dirname);
    const server = http.createServer(function onRequest(req, res) {
      serve(req, res, finalhandler(req, res));
    });
    server.listen(3005);
    close = promisify(server.close);
  });
  afterAll(close);
  const getResource = function(url) {
    return fetch(`http://localhost:3005/${url}`).then(response =>
      response.json()
    );
  };
  test('should understand chaining', function() {
    return getResource('data/player/1.json')
      .then(player => player.name)
      .then(result => expect(result).toBe(__));
  });
  test('should understand chaining 2', function() {
    return getResource('data/leaderboard.json')
      .then(leaderboard => getResource(`data/player/${leaderboard[0]}.json`))
      .then(player => player.name)
      .then(result => expect(result).toBe(__));
  });
  test('should understand chaining 2', function() {
    return getResource('data/leaderboard.json')
      .then(leaderboard => getResource(`data/player/${leaderboard[5]}.json`))
      .then(player => player.name)
      .catch(reason => expect(reason).toEqual(__));
  });
});
