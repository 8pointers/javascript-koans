describe('Deferred', function () {
  it('should invoke done callback when resolved', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred(),
    callback = jasmine.createSpy();
    deferred.done(callback);
    deferred.resolve('argument');
    expect(callback).toHaveBeenCalledWith('argument');
  });
});
