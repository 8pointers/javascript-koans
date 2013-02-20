describe('Deferred', function () {
  it('should invoke all registered failed callbacks', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred().reject('argument'),
    firstCallback = jasmine.createSpy(),
    secondCallback = jasmine.createSpy();
    deferred
      .failed(firstCallback);
      .failed(secondCallback);
    expect(firstCallback).toHaveBeenCalledWith('argument');
    expect(secondCallback).toHaveBeenCalledWith('argument');
  });
});
