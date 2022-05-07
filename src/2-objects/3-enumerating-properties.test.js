describe('Enumerating properties', function () {
  test('1 - should understand for-in loop', function () {
    let properties = 0;
    let ownProperties = 0;
    let enumerableProperties = 0;
    const samurai = {
      name: 'Myamoto',
      age: 32,
      address: {
        street: 'Samurai Way',
        postcode: '18+',
      },
      toString: function () {
        return 'I am a Samurai!';
      },
    };
    for (const name in samurai) {
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
  test('2 - should understand Object.keys', function () {
    const toString = function () {
      return 'I am a Samurai!';
    };
    const samurai = {
      name: 'Myamoto',
      age: 32,
      address: {
        street: 'Samurai Way',
        postcode: '18+',
      },
      toString,
    };
    expect(Object.keys(samurai)).toEqual(__);
    expect(Object.values(samurai)).toEqual(__);
    expect(Object.entries(samurai)).toEqual(__);
  });
});
