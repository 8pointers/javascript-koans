// prettier-ignore
describe('Retrieving properties', function() {
  let samurai;
  beforeEach(function() {
    samurai = {
      name: 'Myamoto',
      address: {
        street: 'Samurai Way',
        postcode: '18+'
      }
    };
  });
  test('1 - should know how to use . and [] operators to retrieve property values', function() {
    expect(samurai.name).toBe(__);
    expect(samurai['n' + 'a' + 'm' + 'e']).toBe(__);
  });
  test('2 - should know that property names are case-sensitive', function() {
    expect(samurai.Name).toBe(__);
  });
  test('3 - should know how to use variable property name', function() {
    const propertyName = 'name';
    expect(samurai.propertyName).toBe(__);
    expect(samurai[propertyName]).toBe(__);
  });
  test('4 - should know default operator ||', function() {
    samurai.title = '';
    expect(samurai.address.city || 'unknown city').toBe(__);
    expect(samurai.address.postcode || 'unknown postcode').toBe(__);
    expect(samurai.title || 'Mr.').toBe(__);
  });
  test('5 - should know guard operator &&', function() {
    let samurai2;
    const samurai3 = {
      address: {
        postcode: '18+'
      }
    };
    expect(samurai && samurai.address && samurai.address.street).toBe(__);
    expect(samurai2 && samurai2.address && samurai2.address.street).toBe(__);
    expect(samurai3 && samurai3.address && samurai3.address.street).toBe(__);
  });
  test('6 - should know how to combine default and guard operators', function() {
    let samurai2;
    const samurai3 = {
      address: {
        postcode: '18+'
      }
    };
    expect(samurai && samurai.address && samurai.address.street || 'N/A').toBe(__);
    expect(samurai2 && samurai2.address && samurai2.address.street || 'N/A').toBe(__);
    expect(samurai3 && samurai3.address && samurai3.address.street || 'N/A').toBe(__);
  });
  test('7 - should understand hasOwnProperty', function() {
    expect(samurai.hasOwnProperty('name')).toBe(__);
    expect(samurai.toString === undefined).toBe(__);
    expect(samurai.hasOwnProperty('toString')).toBe(__);
  });
  test('8 - should understand propertyIsEnumerable', function() {
    expect(samurai.propertyIsEnumerable('name')).toBe(__);
    expect(samurai.propertyIsEnumerable('toString')).toBe(__);
  });
});
