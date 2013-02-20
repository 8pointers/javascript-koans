describe('Deferred', function () {
  it('should pass all the arguments when invoking registered callbacks', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred().reject('arg1, 'arg2'),
    callback = jasmine.createSpy();
    deferred.failed(callback);
    expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
  });
});
