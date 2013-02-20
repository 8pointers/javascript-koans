describe('Deferred', function () {
  it('should be able to register a callback using done method', function () {
    var deferred = new SAMURAIPRINCIPLE.Deferred(), result;
    result = deferred.done(function () {});
    expect(result).toBe(deferred);
  });
});
