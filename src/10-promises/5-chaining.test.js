describe('Chaining', function () {
  const getResource = function (url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200 || xhr.status === 304) {
            try {
              resolve(JSON.parse(xhr.responseText));
            } catch (e) {
              reject(e);
            }
          } else {
            reject(new Error('HTTP request failed'));
          }
        }
      };
      xhr.send();
    });
  };
  test('should understand chaining', function () {
    return getResource('data/player/1.json')
      .then(player => player.name)
      .then(result => expect(result).toBe(__))
      .catch(reason => console.log('This should not be reached', reason));
  });
  test('should understand chaining 2', function () {
    return getResource('data/leaderboard.json')
      .then(leaderboard => getResource(`data/player/${leaderboard[0]}.json`))
      .then(player => player.name)
      .then(result => expect(result).toBe(__))
      .catch(reason => console.log('This should not be reached', reason));
  });
  test('should understand chaining 2', function () {
    return getResource('data/leaderboard.json')
      .then(leaderboard => getResource(`data/player/${leaderboard[5]}.json`))
      .then(player => player.name)
      .catch(reason => expect(reason).toEqual(__));
  });
});
