(function () {
  beforeEach(
    function () {
      //This will be executed before every spec
    }
  );
  afterEach(
    function () {
      //This will be executed after every spec
      var that = this, invokeMeIfYouWantTestToFail = function (message) {
        that.fail({
          name: that.description,
          message: message
        });
      };
    }
  );
})();
