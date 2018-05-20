describe('Promise.race', function() {
  const delay = timeInMillis =>
    new Promise(resolve => setTimeout(resolve, timeInMillis));
  test('should understand Promise.race', function() {
    return Promise.race([
      delay(200).then(() => 'first'),
      delay(100).then(() => 'second')
    ]).then(result => expect(result).toBe(__));
  });
  test('should understand Promise.race', function() {
    return Promise.race([
      delay(100).then(() => 'first'),
      delay(200).then(() => 'second'),
      delay(50).then(() => Promise.reject('third'))
    ])
      .then(() => console.log('This should be reached'))
      .catch(reason => expect(reason).toEqual(__));
  });
});
