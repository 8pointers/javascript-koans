import createStore from './1-createStore';

describe('store', function () {
  const counterReducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
      return state + 1;
    }
    return state;
  };
  let store;
  beforeEach(() => (store = createStore(counterReducer)));
  test('Should be able to specify the initial state', () => {
    store = createStore(counterReducer, 123);

    expect(store.getState()).toBe(123);
  });
  test('Should have 0 initial state', () => {
    expect(store.getState()).toBe(0);
  });
  test('Should update state to 1 after INCREMENT', () => {
    store.dispatch({ type: 'INCREMENT' });

    expect(store.getState()).toBe(1);
  });
  test('Should invoke a listener when action is dispatched', () => {
    const listener = jest.createSpy();
    store.subscribe(listener);

    store.dispatch({ type: 'INCREMENT' });

    expect(listener).toHaveBeenCalled();
  });
  test('Should be able to remove the listener', () => {
    const listener = jest.createSpy();
    const unsubscribe = store.subscribe(listener);
    store.dispatch({ type: 'INCREMENT' });
    unsubscribe();

    store.dispatch({ type: 'INCREMENT' });

    expect(listener).toHaveBeenCalledTimes(1);
  });
});
