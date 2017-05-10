describe('strings', function () {
  it('should understand template strings 1', function () {
    var name = 'Hattori', intro = `My name is ${name}`;
    expect(intro).toBe(__);
  });
  it('should understand template strings 2', function () {
    var name = 'Hattori', age = 16, intro = `My name is ${name} and I am ${age + 2}`;
    expect(intro).toBe(__);
  });
});