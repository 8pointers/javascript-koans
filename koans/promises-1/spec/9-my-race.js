const delay = function (timeInMillis) {
  return new Promise(resolve => setTimeout(resolve, timeInMillis));
};
describe('Promise.myRace', function () {
  Promise.myRace = function () {
    //TODO
  };
  it('should work 1', function () {
    return Promise.myRace([
      delay(200).then(() => 'first'),
      delay(100).then(() => 'second'),
      delay(300).then(() => 'third')
    ]).then(result => expect(result).toBe('second'));
  });
  it('should work 2', function () {
    return Promise.myRace([
      delay(200).then(() => 'first'),
      delay(100).then(() => Promise.reject('second')),
      delay(300).then(() => 'third')
    ]).catch(reason => expect(reason).toBe('second'));
  });
});

describe('Promise.myAll', function () {
  Promise.myAll = function () {
    //TODO
  };
  it('should work 1', function () {
    return Promise.myAll([
      delay(200).then(() => 'first'),
      delay(100).then(() => 'second'),
      delay(300).then(() => 'third')
    ]).then(result => expect(result).toEqual(['first', 'second', 'third']));
  });
  it('should work 2', function () {
    return Promise.myAll([
      delay(200).then(() => 'first'),
      delay(100).then(() => Promise.reject('second')),
      delay(300).then(() => 'third')
    ]).catch(reason => expect(reason).toBe('second'));
  });
});
