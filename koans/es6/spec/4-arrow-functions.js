describe('Arrow functions', () => {
  it('should understand arrow functions', () => {
    const inc = x => x + 1;
    expect(inc(123)).toBe(__);
  });
  it('should understand arrow functions with multiple parameters', () => {
    const add = (a, b) => a + b;
    expect(add(123, 456)).toBe(__);
  });
  it('should understand arrow functions and this', function () {
    var self = this, myFunction, myArrowFunction;
    myFunction = function () {
      expect(this).toBe(__);
    };
    myArrowFunction = () => {
      expect(this).toBe(__);
    };
    myFunction();
    myArrowFunction();
  });
  it('should understand arrow functions', () => {
    expect([1, 2, 3, 4, 5, 6, 7].filter(element => element % 2)).toEqual(__);
  });
});
