describe('functions', function () {
  it('should understand default parameters 1', function () {
    const add = function (a, b = 1) {
      return a + b;
    };
    expect(add(1, 2)).toBe(__);
    expect(add(123)).toBe(__);
  });
  it('should understand default parameters 1', function () {
    const getPropertyName = function (propertyName, object = {firstName: 'Myamoto', lastName: 'Musashi'}) {
      return object[propertyName];
    };
    expect(getPropertyName('firstName')).toBe(__);
    expect(getPropertyName('firstName', { lastName: 'Hattori' })).toBe(__);
  });
});
