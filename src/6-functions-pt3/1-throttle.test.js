import throttle from './1-throttle';

describe('Throttle', function () {
  let priceOnScreen, showPrice, throttledShowPrice;
  beforeEach(function () {
    priceOnScreen = undefined;
    showPrice = function (currentPrice) {
      priceOnScreen = currentPrice;
    };
    throttledShowPrice = throttle(showPrice, 1000);
  });
  test('1 - should invoke the specified function when throttled function invoked first time', function () {
    throttledShowPrice(100);

    expect(priceOnScreen).toBe(100);
  });
  test('2 - should never invoke the specified function twice within specified time interval', function () {
    throttledShowPrice(100);
    throttledShowPrice(200);

    expect(priceOnScreen).toBe(100);
  });
  test('3 - should invoke the specified function after specified interval lapsed, with last', function (done) {
    throttledShowPrice(100);
    setTimeout(function () {
      throttledShowPrice(200);
      expect(priceOnScreen).toBe(100);
    }, 250);

    setTimeout(function () {
      throttledShowPrice(300);
      expect(priceOnScreen).toBe(100);
    }, 500);

    setTimeout(function () {
      expect(priceOnScreen).toBe(300);
      done();
    }, 1001);
  });
});
