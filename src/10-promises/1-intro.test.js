import serve from './serve';

describe('Promises', () => {
  const port = serve(3001);
  const get = (url) => fetch(`http://localhost:${port}/${url}`).then((response) => response.json());

  test('1 - should understand then', () =>
    get('data/leaderboard.json').then((leaderboard) => expect(leaderboard).toEqual(__)));
  test('2 - should understand then', () => get('data/player/1.json').then((player) => expect(player).toEqual(__)));
});
