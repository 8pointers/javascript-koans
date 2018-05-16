describe('Destructuring', function() {
  test('1 - should understand array destructuring', function() {
    const samurai = ['Myamoto', 'Hattori', 'Dave'];
    const [chief, assistant] = samurai;
    expect(chief).toBe(__);
    expect(assistant).toBe(__);
  });
  test('1 - should understand array destructuring & rest operator', function() {
    const samurai = ['Myamoto', 'Hattori', 'Dave'];
    const [chief, ...others] = samurai;
    expect(chief).toBe(__);
    expect(others).toEqual(__);
  });
});
