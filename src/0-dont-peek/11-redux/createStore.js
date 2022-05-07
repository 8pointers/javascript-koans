const createStore = (reducer, initialState) => {
  let state = initialState || reducer(undefined, {});
  let listeners = [];
  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.push(listener);
      return () => (listeners = listeners.filter((l) => l !== listener));
    },
  };
};

export default createStore;
