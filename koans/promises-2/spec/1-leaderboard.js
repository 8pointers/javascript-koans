const SAMURAIPRINCIPLE = {};
(function () {
  const fetchJson = function (url) {
    return fetch(url).then(response => response.json());
  };
  SAMURAIPRINCIPLE.PlayerService = function () {
    this.getPlayer = function (playerId) {
      return fetchJson(`data/player/${playerId}.json`);
    };
  };
  SAMURAIPRINCIPLE.LeaderboardService = function () {
    this.getLeaderboard = function () {
      return fetchJson('data/leaderboard.json');
    };
  };
}());

describe('Using promises', function () {
  it('should understand playerService.getPlayer', function () {
    let playerService = new SAMURAIPRINCIPLE.PlayerService();

    return playerService.getPlayer(1)
      .then(player => expect(player).toEqual(__));
  });
  it('should understand leaderboardService.getLeaderboard', function () {
    let leaderboardService = new SAMURAIPRINCIPLE.LeaderboardService();

    return leaderboardService.getLeaderboard()
      .then(leaderboard => expect(leaderboard).toEqual(__));
  });
  SAMURAIPRINCIPLE.TodoLeaderboardService = function (playerService, leaderboardService) {
    this.getLeaderboard = function () {
      //TODO
    };
  };
  it('should implement TodoLeaderboardService.getLeaderboard so that the test is passing', function () {
    let playerService = new SAMURAIPRINCIPLE.PlayerService(),
      leaderboardService = new SAMURAIPRINCIPLE.LeaderboardService(),
      todoLeaderboardService = new SAMURAIPRINCIPLE.TodoLeaderboardService(playerService, leaderboardService);

    return todoLeaderboardService.getLeaderboard()
      .then(leaderboard => expect(leaderboard).toEqual(['Erin', 'Bob', 'Alice', 'Carol', 'Dan']));
  });
});
