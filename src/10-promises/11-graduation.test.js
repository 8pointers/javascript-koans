import serve from './serve';

describe('Promises', function () {
  const port = serve(3011);
  const get = (url) => fetch(`http://localhost:${port}/${url}`).then((response) => response.json());

  const getLeaderboard = () => get('data/leaderboard.json');
  const getPlayer = (id) => get(`data/player/${id}.json`);
  const getLeaderboardWithPlayers = () => {
    //TODO implement this function, by using getLeaderboard & getPlayer
  };
  test('should implement getLeaderboardWithPlayers', function () {
    return getLeaderboardWithPlayers().then((leaderboard) =>
      expect(leaderboard).toEqual([
        { id: 5, name: 'Dan' },
        { id: 3, name: 'Bob' },
        { id: 2, name: 'Erin' },
        { id: 4, name: 'Carol' },
        { id: 1, name: 'Alice' },
      ])
    );
  });
});
