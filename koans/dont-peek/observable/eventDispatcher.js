var SAMURAIPRINCIPLE = SAMURAIPRINCIPLE || {};
SAMURAIPRINCIPLE.eventDispatcher = function (base) {
  const listeners = [];
  base.addEventListener = function (type, listener, priority) {
    if (!listener) {
      listener = type;
      type = 'default';
    }
    listeners.push({type, listener, priority});
  };
  base.listener = () => listeners[0].listener;
  base.dispatchEvent = function (eventType, ...args) {
    if (!args.length) {
      args = [eventType];
      eventType = 'default';
    }
    listeners
      .filter(({type}) => type === eventType)
      .sort(({priority: priorityOne}, {priority: priorityTwo}) => priorityTwo - priorityOne)
      .some(({listener}) => {
        try {
          return listener(...args) === false;
        } catch (error) {
          //Intentionally left empty (for now)
        }
      });
  };
  base.createObservableProperty = function (propertyName) {
    let propertyValue;
    base[`on${propertyName}Changed`] = base.addEventListener.bind(base, `${propertyName}Changed`);
    base[`set${propertyName}`] = value => base.dispatchEvent(`${propertyName}Changed`, propertyValue = value);
    base[`get${propertyName}`] = () => propertyValue;
  };
  return base;
};
