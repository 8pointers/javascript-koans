describe('Deferred', function () {
  it('should be able to registere multiple callbacks', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred(),
    firstCallback = jasmine.createSpy(),
    secondCallback = jasmine.createSpy();
    deferred
      .done(firstCallback)
      .done(secondCallback)
      .resolve('argument');
    expect(firstCallback).toHaveBeenCalledWith('argument');
    expect(secondCallback).toHaveBeenCalledWith('argument');
  });
});
