describe('Updating property value', function () {
  var samurai1;
  beforeEach(function () {
    samurai1 = {
      name: 'Myamoto',
      address: {
        street: 'Samurai Way',
        postcode: '18+'
      }
    };
  });
  it('1 - should know how to update primitive values', function () {
    var samurai2 = {
      name: samurai1.name
    };
    samurai2.name = 'Hattori';
    expect(samurai2.name).toBe(__);
    expect(samurai1.name).toBe(__);
  });
  it('2 - should know how to update object values', function () {
    var samurai3 = {
      address: samurai1.address
    };
    samurai3.address.street = 'Ninja Way';
    expect(samurai3.address.street).toBe(__);
    expect(samurai1.address.street).toBe(__);
  });
  it('3 - should understand references', function () {
    samurai1.samurai = samurai1;
    expect(samurai1.samurai.samurai.samurai.samurai.name).toBe(__);
  });
});
