describe('Arrays - generic methods', function() {
  test('0 - should have an idea how Array.prototype.join works', function() {
    Array.prototype.myJoin = function(delimiter) {
      //TODO Implement this so that the test is passing, but do not use "join" method (or any other Array.prototype methods) - try and implement it they way you think "real" join method is implemented
    };
    expect([1, 2, 3].myJoin('.')).toBe('1.2.3');
  });
  test('1 - should understand join is a generic method', function() {
    expect(Array.prototype.join.call('Hello', '.')).toBe(__);
    expect(
      Array.prototype.join.call({ 0: 'Z', 1: 'F', 2: 'S', length: 3 }, '-')
    ).toBe(__);
    expect(Array.prototype.join.call({ length: 3 }, '-')).toBe(__);
  });
  test('2 - should understand push is a generic method', function() {
    let obj = { 0: 'Z', 1: 'F', 2: 'S', length: 3 };
    expect(Array.prototype.push.call(obj, 'T', 'G')).toBe(__);
    expect(obj).toEqual(__);
    obj = {};
    expect(Array.prototype.push.call(obj, 'Myamoto', 'Hattori')).toBe(__);
    expect(obj).toEqual(__);
  });
  test('3 - should understand that in order to call/apply push method, the underlying object has to be mutable', function() {
    const hello = 'Hello';
    expect(Array.prototype.push.call(hello, '!')).toBe(__);
    expect(hello).toBe(__); //discuss this with your pair
  });
  test('4 - should understand that pop is generic method', function() {
    const obj = { 0: 'Z', 1: 'F', 2: 'S', 3: 'T', 4: 'G', length: 3 };
    expect(Array.prototype.pop.apply(obj)).toBe(__);
    expect(obj).toEqual(__);
  });
  test('5 - should understand shift is generic method', function() {
    const obj = { 0: 'Z', 1: 'F', 2: 'S', 3: 'T', 4: 'G', length: 3 };
    expect(Array.prototype.shift.apply(obj)).toBe(__);
    expect(obj).toEqual(__);
  });
  test('6 - should understand unshift is generic method', function() {
    const obj = { 0: 'Z', 1: 'F', 2: 'S', 3: 'T', length: 3, name: 'Myamoto' };
    expect(Array.prototype.unshift.call(obj, 'H', 'S')).toBe(__);
    expect(obj).toEqual(__);
  });
  test('7 - should understand slice is generic method', function() {
    const obj = { 0: 'Z', 1: 'F', 2: 'S', 3: 'T', 4: 'G', length: 3 };
    expect(Array.prototype.slice.call(obj, 1)).toEqual(__);
  });
  test('8 - should understand splice is generic method', function() {
    const returnArguments = function() {
      return arguments;
    };
    let args;
    let wasError = false;
    try {
      args = returnArguments(1, 2, 3);
      args.splice(0, 1);
    } catch (error) {
      wasError = true;
    }
    expect(wasError).toBe(__);
    expect(Array.prototype.splice.call(args, 0, 1)).toEqual(__);
    expect(args).toEqual(__);
  });
  test('9 - should understand reverse is generic method', function() {
    const obj = { 0: 'Z', 1: 'F', 2: 'S', 3: 'T', 4: 'G', length: 5 };
    Array.prototype.reverse.apply(obj);
    expect(obj).toEqual(__);
  });
  test('10 - should understand sort is generic method', function() {
    const obj = { 0: 'Z', 1: 'F', 2: 'S', 3: 'T', 4: 'G', length: 5 };
    Array.prototype.sort.apply(obj);
    expect(obj).toEqual(__);
  });
});
