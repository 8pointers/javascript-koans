describe('Destructuring', function() {
  test('1 - should understand array destructuring', function() {
    const [, firstName, lastName] = 'Mr. Myamoto Musashi'.split(' ');
    expect(firstName).toBe(__);
    expect(lastName).toBe(__);
  });
  test('1 - should understand array destructuring & rest operator', function() {
    const [title, ...names] = 'Mr. Myamoto Musashi'.split(' ');
    expect(title).toBe(__);
    expect(names).toEqual(__);
  });
  test('should understand spread operator', function() {
    const [title, ...names] = 'Mr. Myamoto Musashi'.split(' ');
    const newName = [title, ...names.reverse(), '!'].join(' ');
    expect(newName).toBe(__);
  });
});
