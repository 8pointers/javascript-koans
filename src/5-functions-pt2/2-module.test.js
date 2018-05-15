//refactor this so that object with mapping is not created every time (i.e. it is created at most once)
//however, make sure nothing else goes into global namespace (except colorLookup function)
const colorLookup = function(colorString) {
  return {
    red: 0xff0000,
    green: 0x00ff00,
    blue: 0x0000ff
  }[colorString];
};
//test should remain the same
describe('Module pattern', function() {
  test('1 - should understand revealing module pattern', function() {
    expect(colorLookup('red')).toBe(0xff0000);
    expect(colorLookup('unknown color')).toBeUndefined();
  });
});
