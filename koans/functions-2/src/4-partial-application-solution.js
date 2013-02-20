Function.prototype.partial = function () {
  var fn = this, partialArguments = arguments;
  return function () {
    var arg = 0, args = Array.prototype.slice.call(partialArguments);
    for (var i = 0; i < args.length && arg < arguments.length; i++) {
      if (args[i] === undefined) {
        args[i] = arguments[arg++];
      }
    }
    return fn.apply(this, args);
  };
};
