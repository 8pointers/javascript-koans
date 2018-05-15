describe('Warmup - timers and asynchronous specs', function() {
  test('0 - should understand why we need asynchronous specs (so that this spec doesnt just pass)', function() {
    setTimeout(function() {
      expect(1).toBe(2);
    }, 100);
  });
  test('1 - should understand timers', function(done) {
    let i = 0;
    setTimeout(function() {
      i = 1;
    }, 200);
    setTimeout(function() {
      expect(i).toBe(__);
    }, 100);
    setTimeout(function() {
      expect(i).toBe(__);
      done();
    }, 300);
    expect(i).toBe(__);
  });
  test('2 - should understand timers', function(done) {
    let i = 0;
    expect(i).toBe(__);
    setTimeout(function() {
      i = 1;
    }, 0);
    expect(i).toBe(__);
    setTimeout(function() {
      expect(i).toBe(__);
      done();
    }, 1);
    expect(i).toBe(__);
  });
  test('3 - should understand timers', function(done) {
    let i = 0;
    const loopDueTime = Date.now() + 1000;
    setTimeout(function() {
      i = 1;
    }, 300);
    while (new Date().getTime() <= loopDueTime) {
      //intentionally empty
    }
    expect(i).toBe(__);
    setTimeout(function() {
      expect(i).toBe(__);
      done();
    }, 0);
    expect(i).toBe(__);
  });
});

describe('Closure', function() {
  test('1 - should understand loop and closure', function(done) {
    let i;
    let result = '';
    for (i = 0; i < 3; i += 1) {
      setTimeout(function() {
        result += i;
      }, 100 * (i + 1));
    }
    setTimeout(function() {
      expect(result).toBe(__);
      done();
      //discuss this with your pair
      //now change the code within setTimeout (and within setTimeout only) so that expected result is '123'
    }, 400);
  });
});
