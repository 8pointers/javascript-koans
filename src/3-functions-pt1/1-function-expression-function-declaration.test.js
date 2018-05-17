describe('function expression and function declaration', function() {
  test('1 - should understand function expression', function() {
    expect(typeof f).toBe(__);
    var f = function() {
      return 123;
    };
    const g = f;
    expect(typeof f).toBe(__);
    expect(f()).toBe(__);
    expect(f === g).toBe(__);
  });
  test('2 - should understand function declaration', function() {
    expect(typeof f).toBe(__);
    function f() {
      return 123;
    }
    expect(typeof f).toBe(__);
    expect(f()).toBe(__);
  });
  test('3 - should understand function declaration', function() {
    let f;
    expect(typeof f).toBe(__);
    expect(typeof g).toBe(__);
    f = function g() {
      return 123;
    };
    expect(typeof f).toBe(__);
    expect(typeof g).toBe(__);
    expect(f()).toBe(__);
    let result;
    try {
      result = g();
    } catch (error) {
      result = 'error';
    }
    expect(result).toBe(__);
    if (typeof g !== 'undefined') {
      expect(f === g).toBe(__);
    }
  });
  test('4 - should understand function declaration', function() {
    let result = 1;
    if (function f() {}) {
      result += typeof f;
    }
    expect(result).toBe(__);
  });
  test('5 - should understand function expression and declaration', function() {
    const f = function factorial(number) {
      return number ? number * factorial(number - 1) : 1;
    };
    let result;
    try {
      result = f(3);
    } catch (error) {
      result = 'error';
    }
    expect(result).toBe(__);
    expect(typeof factorial).toBe(__);
  });
  test('6 - should understand the impact of anonymous functions on stack traces', function() {
    //uncomment the line below and run the test; check the call stack
    // debugger;
  });
  test('7 - should understand the impact of anonymous functions on stack traces', function noLongerAnonymousFunction() {
    //uncomment the line below and run the test; check the call stack; compare with previous one
    //debugger;
  });
});
