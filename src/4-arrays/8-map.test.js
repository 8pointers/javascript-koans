describe('Array.prototype.map', function () {
  test('1 - should understand map', function () {
    const people = [
      { name: 'Myamoto', age: 23 },
      { name: 'Hattori', age: 34 },
      { name: 'Date', age: 45 },
    ];
    expect(people.map((person) => person.name)).toEqual(__);
    expect(people.map(({ name }) => name)).toEqual(__);
  });
  test('2 - should understand map', function () {
    const n = 3;
    const grid = Array.from({ length: n * n }).map((_, i) => ({ row: Math.floor(i / n), column: i % n }));
    expect(grid).toEqual(__);
  });
  test('3 - should understand map', function () {
    const people = [
      ['Myamoto', 'Musashi', '3rd'],
      ['Hattori', 'Hanzo', 'von', 'Beckenbauer'],
    ];
    expect(people.map(([firstName, lastName, ...otherNames]) => ({ firstName, lastName, otherNames }))).toEqual(__);
  });
  test('4 - should understand map and parseInt', function () {
    const result = ['1', '2', '3'].map(parseInt);
    expect(result).toEqual(__);
    //discuss with your pair
  });
});
