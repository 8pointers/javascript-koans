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
    server.listen(3011);
    close = promisify(server.close);
  });
  afterAll(close);
  const getResource = url =>
    fetch(`http://localhost:3011/${url}`).then(response => response.json());

  const getLeaderboard = () => getResource('data/leaderboard.json');
  const getPlayer = id => getResource(`data/player/${id}.json`);
  const getLeaderboardWithPlayers = () => {
    //TODO implement this function, by using getLeaderboard & getPlayer
  };
  test('should implement getLeaderboardWithPlayers', function() {
    return getLeaderboardWithPlayers().then(leaderboard =>
      expect(leaderboard).toEqual([
        { id: 5, name: 'Dan' },
        { id: 3, name: 'Bob' },
        { id: 2, name: 'Erin' },
        { id: 4, name: 'Carol' },
        { id: 1, name: 'Alice' }
      ])
    );
  });
});
