describe('eventDispatcher', function () {
  it('should be able to cancel event propagation by returning false from event listener', function () {
    var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
      firstListener = jasmine.createSpy().and.returnValue(false),
      secondListener = jasmine.createSpy();
    underTest.addEventListener('EventType', firstListener);
    underTest.addEventListener('EventType', secondListener);
    underTest.dispatchEvent('EventType', 'argument');

    expect(firstListener).toHaveBeenCalledWith('argument');

    expect(secondListener).not.toHaveBeenCalled();
  });
});
