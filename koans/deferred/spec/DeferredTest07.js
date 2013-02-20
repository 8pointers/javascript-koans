describe('Deferred', function () {
  it('should be able to register failed callback', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred(), result;
    result = deferred.failed(function () {});
    expect(result).toBe(deferred);
  });
});
