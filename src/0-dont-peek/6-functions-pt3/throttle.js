const throttle = function(f, timeInMillis) {
  let tsNextInvocationPossible = 0;
  let nextArguments;
  let timeout;
  const apply = function(now, args) {
    tsNextInvocationPossible = now + timeInMillis;
    f.apply({}, args);
  };
  return function(...args) {
    const now = new Date().getTime();
    if (now >= tsNextInvocationPossible) {
      apply(now, args);
    } else {
      nextArguments = args;
      if (!timeout) {
        timeout = setTimeout(function() {
          const now = new Date().getTime();
          timeout = undefined;
          apply(now, nextArguments);
        }, tsNextInvocationPossible - now);
      }
    }
  };
};

export default throttle;
