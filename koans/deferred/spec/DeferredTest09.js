describe('Deferred', function () {
  it('should invoke failed callback when rejected', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred(),
    callback = jasmine.createSpy();
    deferred.failed(callback);
    deferred.reject('argument');
    expect(callback).toHaveBeenCalledWith('argument');
  });
});
