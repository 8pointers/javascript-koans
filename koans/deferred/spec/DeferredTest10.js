describe('Deferred', function () {
  it('should invoke failed callback imediately if already rejected', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred(),
    callback = jasmine.createSpy();
    deferred.reject('argument');
    deferred.failed(callback);
    expect(callback).toHaveBeenCalledWith('argument');
  });
});
