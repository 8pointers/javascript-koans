describe('Deferred', function () {
  it('should be able to reject it', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred(), result;
    result = deferred.reject('argument');
    expect(result).toBe(deferred);
  });
});
