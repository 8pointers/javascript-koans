describe('spread operator (...)', function () {
  test('1 - should understand spread operator', function () {
    const person = {
      name: 'Myamoto',
      age: 32,
    };
    const samurai = {
      ...person,
      weapon: 'Katana',
    };
    expect(samurai).toEqual(__);
  });
  test('2 - should understand spread operator', function () {
    const samurai1 = {
      name: 'Myamoto',
      age: 32,
    };
    const samurai2 = {
      ...samurai1,
      name: 'Hattori',
    };
    expect(samurai2).toEqual(__);
  });
  test('3 - should understand spread operator', function () {
    const samurai1 = {
      name: 'Myamoto',
      age: 32,
    };
    const samurai2 = {
      name: 'Hattori',
      ...samurai1,
    };
    expect(samurai2).toEqual(__);
  });
});
