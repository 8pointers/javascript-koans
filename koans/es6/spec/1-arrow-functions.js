describe('Arrow functions', function () {
  it('should understand arrow functions', function () {
    expect([1, 2, 3].map(element => { return element + 1; })).toBe(__);
    expect([1, 2, 3, 4, 5, 6, 7].filter(element => element % 2)).toBe(__);
  });
});
