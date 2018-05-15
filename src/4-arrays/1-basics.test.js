describe('Arrays - basics', function() {
  let array;
  beforeEach(() => (array = [1, 2, 3]));
  test('1 - should understand array literals', function() {
    const array = [1, '2', [3], false];
    expect(Array.isArray(array)).toBe(__);
    expect(Array.isArray(array[0])).toBe(__);
    expect(Array.isArray(array[1])).toBe(__);
    expect(Array.isArray(array[2])).toBe(__);
    expect(Array.isArray(array[3])).toBe(__);
    const returnArguments = function() {
      return arguments;
    };
    const args = returnArguments(1, 2, 3);
    expect(Array.isArray(args)).toBe(__);
  });
  test('2 - arguments recap', function() {
    const returnArguments = function() {
      return arguments;
    };
    const args = returnArguments(1, 2, 3);
    expect(args[0]).toEqual(__);
    expect(args[1]).toEqual(__);
    expect(args[2]).toEqual(__);
    expect(args.length).toEqual(__);
    expect(Array.isArray(args)).toBe(__);
  });
  test('3 - should understand [] operator', function() {
    expect(array[1]).toBe(__);
    expect(array[3]).toBe(__);
  });
  test('4 - should understand [] operator', function() {
    array[3] = 4;
    expect(array[3]).toBe(__);
  });
  test('5 - should understand length property', function() {
    expect(array.length).toBe(__);
    array[2] = undefined;
    expect(array.length).toBe(__);
    array[99] = 100;
    expect(array.length).toBe(__);
    array[200] = undefined;
    expect(array.length).toBe(__);
  });
  test('6 - should understand length property', function() {
    const array = [1, , , , 5, , , ,];
    expect(array.length).toBe(__);
  });
  test('7 - should understand delete operator', function() {
    delete array[1];
    expect(array[1]).toBe(__);
    expect(array.length).toBe(__);
  });
  test('8 - should understand delete operator', function() {
    delete array[2];
    expect(array.length).toBe(__);
  });
  test('9 - should understand how for and for..in loops are used for iteration', function() {
    const array = [];
    array[1000] = 1000;
    let iterationsFor = 0;
    for (let i = array.length - 1; i >= 0; i -= 1) {
      iterationsFor += 1;
    }
    let iterationsForIn = 0;
    for (const name in array) {
      iterationsForIn += 1;
    }
    expect(iterationsFor).toBe(__);
    expect(iterationsForIn).toBe(__);
  });
});
