describe('Updating property value', function () {
  let samurai1;
  beforeEach(function () {
    samurai1 = {
      name: 'Myamoto',
      address: {
        street: 'Samurai Way',
        postcode: '18+',
      },
    };
  });
  test('1 - should know how to update primitive values', function () {
    const samurai2 = {
      name: samurai1.name,
    };
    samurai2.name = 'Hattori';
    expect(samurai2.name).toBe(__);
    expect(samurai1.name).toBe(__);
  });
  test('2 - should know how to update object values', function () {
    const samurai3 = {
      address: samurai1.address,
    };
    samurai3.address.street = 'Ninja Way';
    expect(samurai3.address.street).toBe(__);
    expect(samurai1.address.street).toBe(__);
  });
  test('3 - should understand references', function () {
    samurai1.samurai = samurai1;
    expect(samurai1.samurai.samurai.samurai.samurai.name).toBe(__);
  });
});
