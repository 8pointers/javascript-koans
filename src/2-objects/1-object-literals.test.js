describe('Object literals', function () {
  test('1 - should make sure that tests are setup correctly', function () {
    expect(1).toBe(__);
  });
  test('2 - should understand object literals', function () {
    const samurai = {
      age: 32,
      isMaster: true,
      name: 'Myamoto',
      'date-of-birth': new Date(),
      address: {
        street: 'Samurai Way 12',
        postcode: 'SW123',
      },
      weapons: ['katana', 'tanto'],
      greet: function () {
        return 'Hello';
      },
    };
    expect(typeof samurai).toBe(__);
  });
  test('3 - shorthand syntax', function () {
    const name = 'Myamoto';
    const age = 32;
    const samurai = { name, age };
    expect(samurai).toEqual(__);
  });
  test('4 - computed property names', function () {
    const propertyName = 'name';
    const name = 'Myamoto';
    const age = 32;
    const samurai = {
      [propertyName]: name,
      ['first' + propertyName]: 'firstName',
      age,
    };
    expect(samurai).toEqual(__);
  });
});
