describe('function parameters', function() {
  test('1 - should understand function length', function() {
    const f = function(first, second) {
      return second;
    };
    expect(f.length).toBe(__);
  });
  test('2 - should understand how parameters are passed in javascript', function() {
    const inc = function(first, second) {
      return first + (second || 1);
    };
    expect(inc(100, 23)).toBe(__);
    expect(inc(100)).toBe(__);
    // for bonus points - can you think of a case when inc would behave in an unexpected way?
    // if yes - write a test to prove it, and then fix the problem.
  });
  test('3 - should understand implicit parameter "arguments"', function() {
    const dec = function() {
      return arguments[0] - (arguments[1] || 1);
    };
    expect(dec(123, 23)).toBe(__);
    expect(dec(101)).toBe(__);
  });
  test('4 - should understand implicit parameter "arguments"', function() {
    const f = function(first, second, third) {
      arguments[2] = 4;
      return first + second + third;
    };
    expect(f(1, 2, 3)).toBe(__);
  });
  test('5 - should understand implicit parameter "arguments"', function() {
    const typeOfArguments = function() {
      return typeof arguments;
    };
    expect(typeOfArguments(1, 2, 3)).toBe(__);
  });
  test('6 - should understand arguments', function() {
    let result;
    const f = function() {
      if (arguments.length === 1) {
        return;
      } else if (arguments.length === 2) {
        return;
      }
      throw 'incorrect number of parameters';
    };
    expect(f(3)).toBe(__);
    expect(f(2, 3)).toBe(__);
    try {
      result = f(2, 3, undefined);
    } catch (error) {
      result = 'error';
    }
    expect(result).toBe(__);
  });
  test('8 - should understand arguments & fat-arrow functions', function() {
    const outer = function() {
      const getArguments = () => {
        return arguments;
      };
      expect(getArguments(3, 4)).toEqual(__);
    };
    outer(1, 2);
  });
  test('9 - should understand default parameters', function() {
    const add = (a, b = 1) => a + b;
    expect(add(2, 3)).toBe(__);
    expect(add(2)).toBe(__);
  });
  test('10 - should understand rest operator (...)', function() {
    const join = function(delimiter, ...args) {
      return args.join(delimiter);
    };
    expect(join('.', 192, 168, 0, 1)).toBe(__);
  });
});
