describe('Deferred.when', function () {
  it('should return Deferred that is resolved when all the deferreds are resolved', function () {
    var doneCallback = jasmine.createSpy(),
    failedCallback = jasmine.createSpy();
    SAMURAIPRINCIPLE.Deferred.when(
      (new SAMURAIPRINCIPLE.Deferred()).resolve(),
      (new SAMURAIPRINCIPLE.Deferred()).resolve(),
      (new SAMURAIPRINCIPLE.Deferred()).resolve()
    ).then(doneCallback, failedCallback);
    expect(doneCallback).toHaveBeenCalled();
    expect(failedCallback).not.toHaveBeenCalled();
  });
});
