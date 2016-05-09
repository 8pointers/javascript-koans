describe('eventDispatcher', function () {
  it('should use dispatchEvent to invoke registered listener', function () {
    var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
      result,
      listener = function () {
        result = 'listenerInvoked';
      };
    underTest.addEventListener(listener);

    underTest.dispatchEvent('argument');

    expect(result).toBe('listenerInvoked');
  });
  //Same test, but using a Jasmine spy
  it('should use dispatchEvent to invoke registered listener', function () {
    var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
      listener = jasmine.createSpy();
    underTest.addEventListener(listener);
    underTest.dispatchEvent('argument');
    expect(listener).toHaveBeenCalledWith('argument');
  });
});
