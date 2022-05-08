import serve from './serve';

describe('Promise.all', function () {
  const port = serve(3006);
  const get = (url) => fetch(`http://localhost:${port}/${url}`).then((response) => response.json());

  test('should understand Promise.all', function () {
    return Promise.all([get('data/player/1.json'), get('data/player/7.json')]).then((result) =>
      expect(result).toEqual(__)
    );
  });

  test('should understand how Promise.all deals with rejections', function () {
    return Promise.all([get('data/player/brake-it.json'), get('data/player/7.json')]).catch((reason) =>
      expect(reason).toEqual(__)
    );
  });
});
