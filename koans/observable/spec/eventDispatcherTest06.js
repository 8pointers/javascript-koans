describe('eventDispatcher', function () {
  it('should invoke all listeners even if one of them throws an error', function () {
    var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
      badListener = jasmine.createSpy().and.throwError('Error!'),
      goodListener = jasmine.createSpy();
    underTest.addEventListener('EventType', badListener);
    underTest.addEventListener('EventType', goodListener);

    underTest.dispatchEvent('EventType', 'argument');

    expect(badListener).toHaveBeenCalledWith('argument');
    expect(goodListener).toHaveBeenCalledWith('argument');
  });
});
