describe('Deferred', function () {
  it('should be able to setup done and failed callbacks with then method', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred().reject('arguments'),
    doneCallback = jasmine.createSpy(),
    failedCallback = jasmine.createSpy();
    deferred.then(doneCallback, failedCallback);
    expect(doneCallback).not.toHaveBeenCalled();
    expect(failedCallback).toHaveBeenCalledWith('arguments');
  });
});
