describe('Delete', function () {
  it('should understand Object.create', function () {
    var numEnumerableProperties = 0,
      propertyName,
      myObject = Object.create({}, {
        firstName: {
          value: 'Myamoto',
          writable: true,
          enumerable: false,
          configurable: false
        }
      });
    expect(myObject.firstName).toBe(__);
    for (propertyName in myObject) {
      numEnumerableProperties++;
    }
    expect(numEnumerableProperties).toBe(__);
    try {
      myObject.firstName = 'Hattori';
    } catch (e) {
    }
    expect(myObject.firstName).toBe(__);
    try {
      delete myObject.firstName;
    } catch (e) {
    }
    expect(myObject.firstName).toBe(__);
  });
});
