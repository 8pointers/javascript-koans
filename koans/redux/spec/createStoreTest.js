describe('store', function () {
  const counterReducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
      return state + 1;
    }
    return state;
  };
  let store;
  beforeEach(() => store = createStore(counterReducer));
  it('Should be able to specify the initial state', () => {
    store = createStore(counterReducer, 123);
  
    expect(store.getState()).toBe(123);
  });
  it('Should have 0 initial state', () => {
    expect(store.getState()).toBe(0);
  });
  it('Should update state to 1 after INCREMENT', () => {
    store.dispatch({type: 'INCREMENT'});
  
    expect(store.getState()).toBe(1);
  });
  it('Should invoke a listener when action is dispatched', () => {
    const listener = jasmine.createSpy();
    store.subscribe(listener);
    
    store.dispatch({type: 'INCREMENT'});
  
    expect(listener).toHaveBeenCalled();
  });
  it('Should be able to remove the listener', () => {
    const listener = jasmine.createSpy();
    const unsubscribe = store.subscribe(listener);
    store.dispatch({type: 'INCREMENT'});
    unsubscribe();
    
    store.dispatch({type: 'INCREMENT'});
  
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
