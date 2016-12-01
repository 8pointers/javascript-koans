describe('Using promises', function () {
  const leaderboardService = {
    getLeaderboard: function () {
      return fetch('data/leaderboard.json')
        .then(response => response.json());
    },
    getLeaderboard2: function () {
      return fetch('data/leaderboard2.json')
        .then(response => response.json());
    }
  };
  it('should understand how async values can be represented using promises', function (done) {
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
  it('should understand how promises can also represent failures', function (done) {
    leaderboardService.getLeaderboard2()
      .then(() => {
        done.fail('This should not be executed');
      },
      reason => {
        expect(reason).toEqual(new Error(__));
        done();
      });
  });
});
