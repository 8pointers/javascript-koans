const delay = timeInMillis => new Promise(resolve => setTimeout(resolve, timeInMillis));

describe('Promise.myAll', function () {
  Promise.myAll = function () {
    //TODO implement so that the tests are passing
  };
  test('should resolve the resulting promise with the array of values original promises were resolved with, if all original promises were resolved', function () {
    return Promise.myAll([
      delay(200).then(() => 'first'),
      delay(100).then(() => 'second'),
      delay(300).then(() => 'third')
    ]).then(result => expect(result).toEqual(['first', 'second', 'third']));
  });
  test('should reject the resulting promise as soon as one of the original promises is rejected', function () {
    return Promise.myAll([
      delay(200).then(() => 'first'),
      delay(100).then(() => Promise.reject('second')),
      delay(300).then(() => 'third')
    ]).catch(reason => expect(reason).toBe('second'));
  });
});
