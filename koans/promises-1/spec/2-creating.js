describe('Creating promises', function () {
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
    },
    leaderboardService = {
      getLeaderboard: function () {
        return getResource('data/leaderboard.json');
      },
      getLeaderboardBadJSON: function () {
        return getResource('data/leaderboard-bad-json.json');
      },
      getLeaderboard404: function () {
        return getResource('data/leaderboard-404.json');
      }
    };
  it('should understand resolve', function (done) {
    leaderboardService.getLeaderboard()
      .then(
        leaderboard => {
          expect(leaderboard).toEqual(__);
          done();
        },
        () => {
          done.fail('This should not be executed');
        }
      );
  });
  it('should understand reject (1)', function (done) {
    leaderboardService.getLeaderboardBadJSON()
      .then(() => {
        done.fail('This should not be executed');
      },
      reason => {
        expect(reason).toEqual(new Error(__));
        done();
      });
  });
  it('should understand reject (2)', function (done) {
    leaderboardService.getLeaderboard404()
      .then(() => {
        done.fail('This should not be executed');
      },
      reason => {
        expect(reason).toEqual(new Error(__));
        done();
      });
  });
});
