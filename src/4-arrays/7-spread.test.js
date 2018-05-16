describe('Spread operator', function() {
  test('1 - should understand spread operator (...)', function() {
    const first = [1, 2, 3];
    const second = [6, 7, 8];
    expect([...first, 4, 5, ...second]).toEqual(__);
  });
});
