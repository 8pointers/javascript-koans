describe('let & const', function () {
  it('should understand var', function () {
    var a = 1;
    expect(a).toBe(__);
    if (true) {
      var a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });
  it('should understand let', function () {
    let a = 1;
    expect(a).toBe(__);
    if (true) {
      let a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });
  it('should understand const', function () {
    const a = 1;
    expect(a).toBe(__);
    if (true) {
      const a = 2;
      expect(a).toBe(__);
    }
    expect(a).toBe(__);
  });
  it('should understand let', function () {
    let a = 1;
    expect(a).toBe(__);
    a = 2;
    expect(a).toBe(__);
  });
  it('should understand const', function () {
    const a = 1;
    expect(a).toBe(__);
    try {
      a = 2;
    } catch (e) {
      //empty
    }
    expect(a).toBe(__);
  });
  it('should understand const', function () {
    const a = { name: 'Myamoto' };
    try {
      a.name = 'Hattori';
    } catch (e) {
      //empty
    }
    expect(a).toEqual(__);
  });
});