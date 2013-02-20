describe('Deferred.when', function () {
  it('should return Deferred that is rejected if one of the Deferreds is rejected', function () {
    var doneCallback = jasmine.createSpy(),
    failedCallback = jasmine.createSpy();
    SAMURAIPRINCIPLE.Deferred.when(
      (new SAMURAIPRINCIPLE.Deferred()).resolve(),
      (new SAMURAIPRINCIPLE.Deferred()).reject(),
      (new SAMURAIPRINCIPLE.Deferred()).resolve()
    ).then(doneCallback, failedCallback);
    expect(doneCallback).not.toHaveBeenCalled();
    expect(failedCallback).toHaveBeenCalled();
  });
});
