// prettier-ignore
const combineReducers = reducerMap => (state, action) => {
  return Object.keys(reducerMap).reduce(
    (newState, propertyName) => {
      newState[propertyName] = reducerMap[propertyName](state && state[propertyName], action);
      return newState;
    },
    {}
  );
};

export default combineReducers;
