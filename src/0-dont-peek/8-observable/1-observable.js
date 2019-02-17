const observable = base => {
  const listeners = [];
  base.addEventListener = (type, listener, priority) => {
    if (!listener) {
      listener = type;
      type = 'default';
    }
    listeners.push({ type, listener, priority });
  };
  base.listener = () => listeners[0].listener;
  base.dispatchEvent = (eventType, ...args) => {
    if (!args.length) {
      args = [eventType];
      eventType = 'default';
    }
    listeners
      .filter(({ type }) => type === eventType)
      .sort((l1, l2) => l2.priority - l1.priority)
      .some(({ listener }) => {
        try {
          return listener(...args) === false;
        } catch (error) {
          //Intentionally left empty (for now)
        }
      });
  };
  base.createObservableProperty = propertyName => {
    let propertyValue;
    base[`on${propertyName}Changed`] = base.addEventListener.bind(base, `${propertyName}Changed`);
    base[`set${propertyName}`] = value => base.dispatchEvent(`${propertyName}Changed`, (propertyValue = value));
    base[`get${propertyName}`] = () => propertyValue;
  };
  return base;
};

export default observable;
