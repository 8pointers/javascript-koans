describe('log (just so you can pick-up some ideas for the next one)', function () {
  Function.prototype.log = function (logName) {
    var fn = this;
    return function (...args) {
      console.log.apply(console, [logName, ...args]);
      return fn.apply(undefined, args);
    };
  };
  test('should work', function () {
    spyOn(console, 'log');
    const add = function (a, b) {
      return a + b;
    }.log('add');

    expect(add(100, 23)).toBe(123);
    expect(console.log).toHaveBeenCalledWith('add', 100, 23);
  });
});
describe('timeout', function () {
  const delay = timeInMillis => new Promise(resolve => setTimeout(resolve, timeInMillis));
  Function.prototype.timeout = function (timeInMillis) {
    //TODO implement so that the tests are passing
  };
  test('should work 1', function () {
    const fast = function () {
      return delay(50).then(() => 'result');
    }.timeout(100);
    return fast()
      .then(result => expect(result).toBe('result'));
  });
  test('should work 2', function () {
    const slow = function () {
      return delay(200).then(() => 'result');
    }.timeout(100);
    return slow()
      .catch(reason => expect(reason).toBe('timeout'));
  });
});
