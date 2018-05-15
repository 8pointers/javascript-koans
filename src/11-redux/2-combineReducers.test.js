import createStore from './1-createStore';
import combineReducers from './2-combineReducers';

const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
};
const visibility = (state = true, action) => {
  if (action.type === 'TOGGLE') {
    return !state;
  }
  return state;
};

let store;
beforeEach(() => {
  store = createStore(combineReducers({ counter, visibility }));
});
test('Should understand the shape of the state tree', () => {
  expect(store.getState()).toEqual({
    counter: 0,
    visibility: true
  });
});
test('Should understand INCREMENT action', () => {
  store.dispatch({ type: 'INCREMENT' });

  expect(store.getState()).toEqual({
    counter: 1,
    visibility: true
  });
});
test('Should understand TOGGLE action', () => {
  store.dispatch({ type: 'TOGGLE' });

  expect(store.getState()).toEqual({
    counter: 0,
    visibility: false
  });
});
