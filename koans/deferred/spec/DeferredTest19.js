describe('Deferred.when', function () {
  it('should return Deferred that is rejected where one Deferreds is rejected and the rest are pending', function () {
    var doneCallback = jasmine.createSpy(),
    failedCallback = jasmine.createSpy();
    SAMURAIPRINCIPLE.Deferred.when(
      new SAMURAIPRINCIPLE.Deferred(),
      new SAMURAIPRINCIPLE.Deferred(),
      (new SAMURAIPRINCIPLE.Deferred()).reject(),
      new SAMURAIPRINCIPLE.Deferred(),
      new SAMURAIPRINCIPLE.Deferred()
    ).then(doneCallback, failedCallback);
    expect(doneCallback).not.toHaveBeenCalled();
    expect(failedCallback).toHaveBeenCalled();
  });
});
