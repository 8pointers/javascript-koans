describe('Deferred.when', function () {
  it('should return Deferred that is resolved when all the deferreds are resolved', function () {
    var doneCallback = jasmine.createSpy(),
    failedCallback = jasmine.createSpy();
    SAMURAIPRINCIPLE.Deferred.when(
      (new SAMURAIPRINCIPLE.Deferred()).resolve(1),
      (new SAMURAIPRINCIPLE.Deferred()).resolve(2),
      (new SAMURAIPRINCIPLE.Deferred()).resolve(3)
    ).then(doneCallback, failedCallback);
    expect(doneCallback).toHaveBeenCalled();
    expect(failedCallback).not.toHaveBeenCalled();
  });
});
