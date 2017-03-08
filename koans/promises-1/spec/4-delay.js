describe('delay', function () {
  const delay = function (timeInMillis) {
    //TODO: Implement this function so that the tests are passing
  };
  it('should understand resolve', function (done) {
    let invoked = false;

    delay(1000)
      .then(() => invoked = true);

    setTimeout(() => expect(invoked).toBe(false), 800);
    setTimeout(
      () => {
        expect(invoked).toBe(true);
        done();
      },
      1200
    );
  });
});
