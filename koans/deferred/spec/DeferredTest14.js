describe('Deferred', function () {
  it('should be able to setup done and failed callbacks with then method', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred().resolve('argument'),
    doneCallback = jasmine.createSpy(),
    failedCallback = jasmine.createSpy();
    deferred.then(doneCallback, failedCallback);
    expect(doneCallback).toHaveBeenCalledWith('argument');
    expect(failedCallback).not.toHaveBeenCalled();
  });
});
