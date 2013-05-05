(function () {
  var pollution,
  saveGlobal = function () {
    var key;
    pollution = [];
    for (key in window) {
      pollution.push(key);
    }
  },
  diff = function (a, b) {
    var result = a.slice(), i, j;
    for (i = 0; i < result.length; i += 1) {
      for (j = 0; j < b.length; j += 1) {
        if (result[i] === b[j]) {
          result.splice(i, 1);
          i -= 1;
          break;
        }
      }
    }
    return result;
  };
  beforeEach(
    function () {
      saveGlobal();
    }
  );
  afterEach(
    function () {
      var old = pollution, introducedGlobals, deletedGlobals, that = this,
      failMe = function (message) {
        that.fail({
          name: that.description,
          message: message
        });
      };
      saveGlobal();
      introducedGlobals = diff(pollution, old);
      if (introducedGlobals.length) {
        failMe('Introduced global variable(s): ' + introducedGlobals.join(', '));
      }
      deletedGlobals = diff(old, pollution);
      if (deletedGlobals.length) {
        failMe('Deleted global variable(s): ' + deletedGlobals.join(', '));
      }
    }
  );
})();