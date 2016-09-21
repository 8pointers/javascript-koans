const SAMURAIPRINCIPLE = {};

SAMURAIPRINCIPLE.PlayerService = function () {
  this.getPlayer = function (playerId) {
    return fetch(`data/player/${playerId}.json`)
      .then(response => response.json());
  };
};
SAMURAIPRINCIPLE.LeaderboardService = function () {
  this.getLeaderboard = function () {
    return fetch('data/leaderboard.json')
      .then(response => response.json());
  };
};

let playerService = new SAMURAIPRINCIPLE.PlayerService(),
  leaderboardService = new SAMURAIPRINCIPLE.LeaderboardService();

playerService.getPlayer(1)
  .then(player => console.log('Player', player), reason => console.log(reason));
leaderboardService.getLeaderboard()
  .then(leaderboard => console.log('Leaderboard', leaderboard), reason => console.log(reason));
