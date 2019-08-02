/**
 * @jest-environment node
 */
const fetch = require('node-fetch');
const serve = require('./serve');

describe('Chaining', function() {
  const port = 3005;
  serve(port);
  const get = url => fetch(`http://localhost:${port}/${url}`).then(response => response.json());

  test('should understand chaining 1', function() {
    return get('data/player/1.json')
      .then(player => player.name)
      .then(result => expect(result).toBe(__));
  });
  test('should understand chaining 2', function() {
    return get('data/leaderboard.json')
      .then(leaderboard => get(`data/player/${leaderboard[0]}.json`))
      .then(player => player.name)
      .then(result => expect(result).toBe(__));
  });
  test('should understand chaining 3', function() {
    return get('data/leaderboard.json')
      .then(leaderboard => get(`data/player/${leaderboard[5]}.json`))
      .then(player => player.name)
      .catch(reason => expect(reason).toEqual(__));
  });
});
