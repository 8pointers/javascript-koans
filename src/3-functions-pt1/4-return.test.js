describe('return', function() {
  test('1 - should understand return', function() {
    const Samurai = function(name) {
      this.name = name;
    };
    const samurai = new Samurai('Myamoto');
    expect(Samurai('Myamoto')).toBe(__);
    expect(samurai.name).toBe(__);
    expect(samurai instanceof Samurai).toBe(__);
    expect(samurai.constructor).toBe(__);
  });
  test('2 - should understand return', function() {
    const Samurai = function(name) {
      this.name = name;
      return 1; //also try with 0, true, false, "string", null, undefined
    };
    const samurai = new Samurai('Myamoto');
    expect(samurai.name).toBe(__);
    expect(samurai instanceof Samurai).toBe(__);
    expect(samurai.constructor).toBe(__);
  });
  test('3 - should understand return', function() {
    const Samurai = function(name) {
      return {
        name: name
      };
    };
    const samurai = new Samurai('Myamoto');
    expect(samurai.name).toBe(__);
    expect(samurai instanceof Samurai).toBe(__);
    expect(samurai.constructor).toBe(__);
  });
  test('4 - should understand return', function() {
    const Samurai = function(name) {
      //todo - implement this so that test passes
    };
    const samurai1 = Samurai('Myamoto');
    const samurai2 = new Samurai('Myamoto');
    expect(samurai1 instanceof Samurai).toBe(true);
    expect(samurai1.name).toBe('Myamoto');
    expect(samurai2 instanceof Samurai).toBe(true);
    expect(samurai2.name).toBe('Myamoto');
  });
});
