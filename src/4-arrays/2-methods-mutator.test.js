describe('Mutator methods', function() {
  test('1 - should understand push', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.push(6, 7)).toBe(__);
    expect(array).toEqual(__);
    expect(array.length).toBe(__);
    array.length = 10;
    array.push(8, 9);
    expect(array).toEqual(__);
    expect(array.length).toBe(__);
  });
  test('2 - should understand pop', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.pop()).toBe(__);
    expect(array).toEqual(__);
    array.length = 10;
    expect(array.pop()).toBe(__);
    expect(array).toEqual(__);
  });
  test('3 - should understand shift', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.shift()).toBe(__);
    expect(array).toEqual(__);
    array = [, , , 3, 4, 5];
    expect(array.shift()).toBe(__);
    expect(array).toEqual(__);
  });
  test('4 - should understand unshift', function() {
    let array = [1, 2, 3, 4, 5];
    expect(array.unshift(6, 7)).toBe(__);
    expect(array).toEqual(__);
    array = [, , , 3, 4, 5];
    expect(array.unshift(6, 7)).toBe(__);
    expect(array).toEqual(__);
  });
  test('5 - should understand splice', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.splice(1, 2)).toEqual(__);
    expect(array).toEqual(__);
  });
  test('6 - should understand splice', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.splice(1, 2, 21, 31)).toEqual(__);
    expect(array).toEqual(__);
  });
  test('7 - should understand reverse', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.reverse()).toBe(__);
    expect(array).toEqual(__);
  });
  test('8 - should understand sort', function() {
    const array = [1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14, 16];
    expect(array.sort()).toEqual(__);
  });
  test('9 - should understand sort', function() {
    const array = [1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14, 16];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const compareFunction = function(first, second) {
      //implement this so that test is passing
    };
    expect(array.sort(compareFunction)).toEqual(sortedArray);
  });
});
