describe('Array.prototype.reduce', function () {
  test('1 - should understand reduce', function () {
    const transactions = [
      { accountId: 1, amount: 10 },
      { accountId: 2, amount: 20 },
      { accountId: 1, amount: 30 },
      { accountId: 3, amount: 40 },
      { accountId: 2, amount: 50 },
      { accountId: 1, amount: 60 },
      { accountId: 5, amount: 70 },
    ];
    const result = transactions.reduce((acc, { accountId, amount }) => ({ ...acc, [accountId]: (acc[accountId] || 0) + amount }), {});
    expect(result).toEqual(__);
  });
  test('2 - should understand reduce', function () {
    const arr = [1, 2, 3, 1, 4, 2, 5, 1, 4];
    expect(arr.reduce((acc, x) => ({ ...acc, [x]: (acc[x] || 0) + 1 }), {})).toEqual(__);
  });
  test('3 - should understand reduce', function () {
    expect([1, 2, 3, 4, 5].reduce((acc, x) => `${acc}-${x}`, '')).toBe(__);
    expect([1, 2, 3, 4, 5].reduce((acc, x) => `${acc}-${x}`)).toBe(__);
  });
  test('4 - should implement Array.prototype.map using Array.prototype.reduce', function () {
    Array.prototype.myMap = function (f) {
      //TODO - implement using Array.prototype.reduce
    };
    expect([1, 2, 3, 4].myMap((x) => x * 10)).toEqual([10, 20, 30, 40]);
  });
  test('5 - should implement Array.prototype.filter using Array.prototype.reduce', function () {
    Array.prototype.myFilter = function (f) {
      //TODO - implement using Array.prototype.reduce
    };
    expect([1, 2, 3, 4, 5, 6, 7].myFilter((x) => x % 2)).toEqual([1, 3, 5, 7]);
  });
  it('6 - should understand Array.prototype methods chaining', function () {
    const ngClass = (classes) =>
      Object.entries(classes)
        .filter(([, isOn]) => isOn)
        .map(([className]) => className)
        .reduce((acc, x) => `${acc} ${x}`);
    const hidden = false;
    const cookie = 'sessionId:blah';
    const balance = 1234.56;
    const errors = [];
    expect(ngClass({ hidden, loggedIn: cookie, vip: balance > 1000, error: errors.length })).toBe(__);
  });
});
