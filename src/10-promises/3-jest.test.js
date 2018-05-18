/**
 * @jest-environment node
 */
const finalhandler = require('finalhandler');
const http = require('http');
const { promisify } = require('util');
const serveStatic = require('serve-static');
const fetch = require('node-fetch');

describe('Simpler tests using jest', function() {
  let close;
  beforeAll(function() {
    const serve = serveStatic(__dirname);
    const server = http.createServer(function onRequest(req, res) {
      serve(req, res, finalhandler(req, res));
    });
    server.listen(3003);
    close = promisify(server.close);
  });
  afterAll(close);
  const getResource = url =>
    fetch(`http://localhost:3003/${url}`).then(response => response.json());

  const leaderboardService = {
    getLeaderboard: function() {
      return getResource('data/leaderboard.json');
    },
    getLeaderboardBadJSON: function() {
      return getResource('data/leaderboard-bad-json.json');
    },
    getLeaderboard404: function() {
      return getResource('data/leaderboard-404.json');
    }
  };
  test('1 - should understand testing resolved promises', function() {
    return leaderboardService
      .getLeaderboard()
      .then(leaderboard => expect(leaderboard).toEqual(__));
  });
  test('2 - should understand rejected promises', function() {
    return leaderboardService
      .getLeaderboardBadJSON()
      .catch(reason => expect(reason).toEqual(__));
  });
});
