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

let playerService = new SAMURAIPRINCIPLE.PlayerService(),
  leaderboardService = new SAMURAIPRINCIPLE.LeaderboardService();

playerService.getPlayer(1)
  .then(player => console.log('Player', player), reason => console.log(reason));
leaderboardService.getLeaderboard()
  .then(leaderboard => console.log('Leaderboard', leaderboard), reason => console.log(reason));
