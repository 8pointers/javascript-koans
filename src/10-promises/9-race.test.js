const delay = timeInMillis => new Promise(resolve => setTimeout(resolve, timeInMillis));

describe('Promise.myRace', function () {
  Promise.myRace = function () {
    //TODO implement so that the tests are passing
  };
  test('should resolve or reject resulting promise as soon as one of the promises is resolved or rejected - (resolved case)', function () {
    return Promise.myRace([
      delay(200).then(() => 'first'),
      delay(100).then(() => 'second'),
      delay(300).then(() => 'third')
    ]).then(result => expect(result).toBe('second'));
  });
  test('should resolve or reject resulting promise as soon as one of the promises is resolved or rejected - (rejected case)', function () {
    return Promise.myRace([
      delay(200).then(() => 'first'),
      delay(100).then(() => Promise.reject('second')),
      delay(300).then(() => 'third')
    ]).catch(reason => expect(reason).toBe('second'));
  });
});
