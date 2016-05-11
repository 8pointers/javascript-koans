var SAMURAIPRINCIPLE = SAMURAIPRINCIPLE || {};
SAMURAIPRINCIPLE.throttle = function (f, timeInMillis) {
  var tsNextInvocationPossible = 0, nextArguments, timeout, apply;
  apply = function (now, args) {
    tsNextInvocationPossible = now + timeInMillis;
    f.apply({}, args);
  };
  return function () {
    var now = new Date().getTime();
    if (now >= tsNextInvocationPossible) {
      apply(now, arguments);
    } else {
      nextArguments = arguments;
      if (!timeout) {
        timeout = setTimeout(function () {
          var now = new Date().getTime();
          timeout = undefined;
          apply(now, nextArguments);
        }, tsNextInvocationPossible - now);
      }
    }
  };
};
