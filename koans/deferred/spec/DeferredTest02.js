describe('Deferred', function () {
  it('should be able to resolve it', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred(), result;
    result = deferred.resolve('argument');
    expect(result).toBe(deferred);
  });
});
