describe('timeout', function () {
  const delay = function (timeInMillis) {
    return new Promise(resolve => setTimeout(resolve, timeInMillis));
  };
  Function.prototype.timeout = function (timeInMillis) {
    //TODO
  };
  it('should work 1', function () {
    const fast = function () {
      return delay(50).then(() => 'result');
    }.timeout(100);
    return fast()
      .then(result => expect(result).toBe('result'));
  });
  it('should work 2', function () {
    const slow = function () {
      return delay(200).then(() => 'result');
    }.timeout(100);
    return slow()
      .catch(reason => expect(reason).toBe('timeout'));
  });
});
