import serve from './serve';

describe('Promises', function () {
  const port = 3001;
  serve(port);
  const get = (url) => fetch(`http://localhost:${port}/${url}`).then((response) => response.json());

  test('1 - should understand then', function () {
    return get('data/leaderboard.json').then((l) => expect(l).toEqual(__));
  });
  test('2 - should understand then', function () {
    return get('data/player/1.json').then((p) => expect(p).toEqual(__));
  });
});
