describe('Some ES5 features', function() {
  test('should understand Object.create', function() {
    let numEnumerableProperties = 0;
    const myObject = Object.create(
      {},
      {
        firstName: {
          value: 'Myamoto',
          writable: true,
          enumerable: false,
          configurable: false
        }
      }
    );
    expect(myObject.firstName).toBe(__);
    for (const propertyName in myObject) {
      numEnumerableProperties++;
    }
    expect(numEnumerableProperties).toBe(__);
    try {
      myObject.firstName = 'Hattori';
    } catch (e) {
      //intentionally empty
    }
    expect(myObject.firstName).toBe(__);
    try {
      delete myObject.firstName;
    } catch (e) {
      //intentionally empty
    }
    expect(myObject.firstName).toBe(__);
  });
  test('should understand Object.seal', function() {
    const samurai = {
      name: 'Myamoto'
    };
    Object.seal(samurai);

    try {
      samurai.name = 'Hattori';
    } catch (e) {
      //Intentionally empty
    }
    expect(samurai.name).toBe(__);

    try {
      samurai.address = '1 Ninja Way';
    } catch (e) {
      //Intentionally empty
    }
    expect(samurai.address).toBe(__);
  });
  test('should understand Object.freeze', function() {
    const samurai = {
      name: 'Myamoto'
    };
    Object.freeze(samurai);

    try {
      samurai.name = 'Hattori';
    } catch (e) {
      //Intentionally empty
    }
    expect(samurai.name).toBe(__);

    try {
      samurai.address = '1 Ninja Way';
    } catch (e) {
      //Intentionally empty
    }
    expect(samurai.address).toBe(__);
  });
});
