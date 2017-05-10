describe('eventDispatcher', function () {
  it('should be able to dispatch variable number of arguments', function () {
    var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
      listener = jasmine.createSpy();
    underTest.addEventListener('EventType', listener);
    underTest.dispatchEvent('EventType', 'argument1', 'argument2', 'argument3');

    expect(listener).toHaveBeenCalledWith('argument1', 'argument2', 'argument3');
  });
});
