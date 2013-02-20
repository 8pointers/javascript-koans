describe('Deferred', function () {
  it('should invoke done callback imediately if already resolved', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred().resolve('argument'),
    callback = jasmine.createSpy();
    deferred.done(callback);
    expect(callback).toHaveBeenCalledWith('argument');
  });
});
