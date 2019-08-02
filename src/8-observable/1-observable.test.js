import observable from './1-observable';

// prettier-ignore
describe('observable', function() {
  test('should use observable as a mixin', function() {
    const base = {};

    const result = observable(base);

    expect(result).toBe(base);
  });
  test('should use addEventListener method to add event listener', function() {
    const underTest = observable({});
    const listener = function() {};

    underTest.addEventListener(listener);

    expect(underTest.listener()).toEqual(listener);
  });
  test('should use dispatchEvent to invoke registered listener 1', function() {
    const underTest = observable({});
    let result;
    const listener = function(argument) {
      result = 'listenerInvoked with: ' + argument;
    };
    underTest.addEventListener(listener);

    underTest.dispatchEvent('argument');

    expect(result).toBe('listenerInvoked with: argument');
  });
  //Same test, but using a spy
  test('should use dispatchEvent to invoke registered listener 2', function() {
    const underTest = observable({});
    const listener = jest.fn().mockName('listener');
    underTest.addEventListener(listener);

    underTest.dispatchEvent('argument');

    expect(listener).toHaveBeenCalledWith('argument');
  });
  test('should be able to add multiple listeners', function() {
    const underTest = observable({});
    const firstListener = jest.fn().mockName('firstListener');
    const secondListener = jest.fn().mockName('secondListener');
    underTest.addEventListener(firstListener);
    underTest.addEventListener(secondListener);

    underTest.dispatchEvent('argument');

    expect(firstListener).toHaveBeenCalledWith('argument');
    expect(secondListener).toHaveBeenCalledWith('argument');
  });
  test('should be able to add listener for an event type', function() {
    const underTest = observable({});
    const listenerOnTypeA = jest.fn().mockName('listenerA');
    const listenerOnTypeB = jest.fn().mockName('listenerB');
    underTest.addEventListener('TypeA', listenerOnTypeA);
    underTest.addEventListener('TypeB', listenerOnTypeB);

    underTest.dispatchEvent('TypeA', 'argument');

    expect(listenerOnTypeA).toHaveBeenCalledWith('argument');
    expect(listenerOnTypeB).not.toHaveBeenCalled();
  });
  test('should invoke all listeners even if one of them throws an error', function() {
    const underTest = observable({});
    const badListener = jest.fn().mockName('badListener')
      .mockImplementation(() => {
        throw 'Error!';
      });
    const goodListener = jest.fn().mockName('goodListener');
    underTest.addEventListener('EventType', badListener);
    underTest.addEventListener('EventType', goodListener);

    underTest.dispatchEvent('EventType', 'argument');

    expect(badListener).toHaveBeenCalledWith('argument');
    expect(goodListener).toHaveBeenCalledWith('argument');
  });
  test('should be able to specify the order in which listeners are invoked, by setting priority', function() {
    const underTest = observable({});
    let result = ':';
    underTest.addEventListener('EventType', () => result += 'first:', 1);
    underTest.addEventListener('EventType', () => result += 'second:', 2);

    underTest.dispatchEvent('EventType', 'argument');

    expect(result).toBe(':second:first:');
  });
  test('should be able to cancel event propagation by returning false from event listener', function() {
    const underTest = observable({});
    const firstListener = jest.fn().mockName('firstListener').mockReturnValue(false);
    const secondListener = jest.fn().mockName('secondListener');
    underTest.addEventListener('EventType', firstListener);
    underTest.addEventListener('EventType', secondListener);
    underTest.dispatchEvent('EventType', 'argument');

    expect(firstListener).toHaveBeenCalledWith('argument');
    expect(secondListener).not.toHaveBeenCalled();
  });
  test('should be able to dispatch variable number of arguments', function() {
    const underTest = observable({});
    const listener = jest.fn().mockName('listener');
    underTest.addEventListener('EventType', listener);
    underTest.dispatchEvent('EventType', 'argument1', 'argument2', 'argument3');

    expect(listener).toHaveBeenCalledWith('argument1', 'argument2', 'argument3');
  });
  test('should be able to specify observable properties', function() {
    const underTest = observable({});
    const listener = jest.fn().mockName('balanceChangedListener');
    underTest.createObservableProperty('Balance');
    underTest.onBalanceChanged(listener);

    underTest.setBalance(123.45);

    expect(underTest.getBalance()).toBe(123.45);
    expect(listener).toHaveBeenCalledWith(123.45);
  });
});
