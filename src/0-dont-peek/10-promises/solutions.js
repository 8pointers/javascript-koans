// 8
const delay = timeInMillis =>
  new Promise(resolve => setTimeout(resolve, timeInMillis));

Function.prototype.timeout = function(timeInMillis) {
  const fn = this;
  return function(...args) {
    return Promise.race([
      fn(...args),
      delay(timeInMillis).then(() => Promise.reject('timeout'))
    ]);
  };
};

// 9
Promise.myRace = function(promises) {
  return new Promise((resolve, reject) =>
    promises.forEach(promise => promise.then(resolve, reject))
  );
};
// 10
Promise.myAll = function(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let remaining = promises.length;
    promises.forEach((promise, i) =>
      promise.then(
        result => {
          results[i] = result;
          remaining--;
          if (!remaining) {
            resolve(results);
          }
        },
        reason => reject(reason)
      )
    );
  });
};

// 11
const getLeaderboard = () => getResource('data/leaderboard.json');

const getPlayer = id =>
  getResource(`data/player/${id}.json`).then(p => ({ id, ...p }));

const getLeaderboardWithPlayers = () =>
  getLeaderboard().then(leaderboard => Promise.all(leaderboard.map(getPlayer)));
