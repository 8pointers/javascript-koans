/**
 * @jest-environment node
 */
const fetch = require('node-fetch');
const serve = require('./serve');

describe('Simpler tests using jest', function() {
  const port = 3003;
  serve(port);
  const get = url =>
    fetch(`http://localhost:${port}/${url}`).then(response => response.json());

  const leaderboardService = {
    getLeaderboard: function() {
      return get('data/leaderboard.json');
    },
    getLeaderboardBadJSON: function() {
      return get('data/leaderboard-bad-json.json');
    },
    getLeaderboard404: function() {
      return get('data/leaderboard-404.json');
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
