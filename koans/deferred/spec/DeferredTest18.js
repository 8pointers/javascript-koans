describe('Deferred.when', function () {
  it('should return Deferred that is pending until all of the Deferreds have resolved', function () {
    var doneCallback = jasmine.createSpy(),
    failedCallback = jasmine.createSpy();
    SAMURAIPRINCIPLE.Deferred.when(
      (new SAMURAIPRINCIPLE.Deferred()).resolve(),
      (new SAMURAIPRINCIPLE.Deferred()).resolve(),
      new SAMURAIPRINCIPLE.Deferred(),
      (new SAMURAIPRINCIPLE.Deferred()).resolve()
    ).then(doneCallback, failedCallback);
    expect(doneCallback).not.toHaveBeenCalled();
    expect(failedCallback).not.toHaveBeenCalled();
  });
});
