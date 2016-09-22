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

SAMURAIPRINCIPLE.BetterLeaderboardService = function (playerService, leaderboardService) {
  this.getLeaderboard = function () {
    return leaderboardService.getLeaderboard()
      .then(leaderboard => Promise.all(leaderboard.map(l => playerService.getPlayer(l.id))));
  };
  this.getLeaderboardAnotherSolution = function () {
    return leaderboardService.getLeaderboard()
      .then(leaderboard => leaderboard.map(l => playerService.getPlayer(l.id)))
      .then(leaderboard => Promise.all(leaderboard));
  };
  this.getLeaderboardYetAnotherSolution = function () {
    return leaderboardService.getLeaderboard()
      .then(function (leaderboard) {
        return leaderboard.map(l => playerService.getPlayer(l.id));
      })
      .then(Promise.all.bind(Promise));
  };
};

let playerService = new SAMURAIPRINCIPLE.PlayerService(),
  leaderboardService = new SAMURAIPRINCIPLE.LeaderboardService(),
  betterLeaderboardService = new SAMURAIPRINCIPLE.BetterLeaderboardService(playerService, leaderboardService);

playerService.getPlayer(1)
  .then(player => console.log('Player', player), reason => console.log(reason));
leaderboardService.getLeaderboard()
  .then(leaderboard => console.log('Leaderboard', leaderboard), reason => console.log(reason));
betterLeaderboardService.getLeaderboard()
  .then(leaderboard => console.log('BetterLeaderboard', leaderboard), reason => console.log(reason));
