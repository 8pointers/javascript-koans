describe('var, let & const', function () {
  test('should understand var', function () {
    var a = 1;
    expect(a).toBe(__);
    if (a) {
      var a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });
  test('should understand let 1', function () {
    let a = 1;
    expect(a).toBe(__);
    if (a) {
      let a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });
  test('should understand const 1', function () {
    const a = 1;
    expect(a).toBe(__);
    if (a) {
      const a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });
  test('should understand let 2', function () {
    let a = 1;
    expect(a).toBe(__);
    a = 2;
    expect(a).toBe(__);
  });
  test('should understand const 2', function () {
    const a = 1;
    expect(a).toBe(__);
    try {
      // a = 2;
    } catch (e) {
      //empty
    }
    expect(a).toBe(__);
  });
  test('should understand const 3', function () {
    const a = { name: 'Myamoto' };
    a.name = 'Hattori';
    expect(a).toEqual(__);
  });
});
