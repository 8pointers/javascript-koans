describe('Arrays - iteration methods', function() {
  test('1 - should understand filter', function() {
    const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    expect(
      array.filter(function(element) {
        return element <= 3;
      })
    ).toEqual(__);
  });
  test('2 - should understand filter with this', function() {
    const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    const visited = {};
    expect(
      array.filter(function(element) {
        if (this[element]) {
          return false;
        }
        this[element] = true;
        return true;
      }, visited)
    ).toEqual(__);
    expect(visited).toEqual(__);
  });
  test('3 - should understand forEach', function() {
    const array = [1, 2, 3, 4, 5];
    let result = 0;
    array.forEach(function(element) {
      result += element;
    });
    expect(result).toBe(__);
  });
  test('4 - should understand forEach with this', function() {
    const array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    let result = 0;
    array.forEach(function(element) {
      if (!this[element]) {
        result += element;
      }
      this[element] = true;
    }, {});
    expect(result).toBe(__);
  });
  test('5 - should understand every', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.every((element, index) => element > index)).toEqual(__);
  });
  test('6 - should understand map', function() {
    const array = ['Myamoto', 'Hattori', 'Dave'];
    expect(array.map((element, index) => index + ' - ' + element)).toEqual(__);
  });
  test('7 - should understand some', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.some(element => element < 0)).toBe(__);
    array[2] = -array[2];
    expect(array.some(element => element < 0)).toBe(__);
  });
  test('8 - should understand reduce', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.reduce((acc, element) => acc * element, 1)).toBe(__);
  });
  test('9 - should understand reduceRight', function() {
    const array = [1, 2, 3, 4, 5];
    expect(array.reduceRight((acc, element) => acc * element, 1)).toBe(__);
  });
  test('10 - should understand map and reduce', function() {
    const result = new Array(10)
      .join(',.')
      .split(',')
      .map((_, index) => index)
      .reduce((acc, element) => acc + element * element, 0);
    expect(result).toBe(__);
  });
  test('11 - should understand map and parseInt', function() {
    const result = ['1', '2', '3'].map(parseInt);
    expect(result).toEqual(__);
    //discuss with your pair
  });
});
