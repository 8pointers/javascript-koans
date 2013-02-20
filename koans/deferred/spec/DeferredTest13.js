describe('Deferred', function () {
  it('should not invoke done callbacks when rejected', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred().reject('argument'),
    doneCallback = jasmine.createSpy(),
    failedCallback = jasmine.createSpy();
    deferred
      .done(doneCallback)
      .failed(failedCallback);
    expect(doneCallback).not.toHaveBeenCalled();
    expect(failedCallback).toHaveBeenCalledWith('argument');
  });
});
