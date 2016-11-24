describe('Enumerating properties', function () {
  it('1 - should understand for-in loop', function () {
    var samurai, name, properties = 0, ownProperties = 0, enumerableProperties = 0;
    samurai = {
      name: 'Myamoto',
      age: 32,
      address: {
        street: 'Samurai Way',
        postcode: '18+'
      },
      toString: function () {
        return 'I\'m a Samurai!';
      }
    };
    for (name in samurai) {
      properties += 1;
      if (samurai.hasOwnProperty(name)) {
        ownProperties += 1;
      }
      if (samurai.propertyIsEnumerable(name)) {
        enumerableProperties += 1;
      }
    }
    expect(properties).toBe(__);
    expect(ownProperties).toBe(__);
    expect(enumerableProperties).toBe(__);
  });
});
