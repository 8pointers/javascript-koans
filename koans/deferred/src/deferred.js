var log = console.log.bind(console);
var SAMURAIPRINCIPLE = {};

SAMURAIPRINCIPLE.Deferred = function() {

    var resolveCallbacks = [],
        rejectCallbacks = [],
        deferredValues,
        self = this,
        isRejected = false,
        isResolved = false;

    this.done = function(resolvedHandler) {
        resolveCallbacks.push(resolvedHandler);
        if (isResolved) {
            self.resolve.apply(self, deferredValues);
        }
        return self;
    };

    this.resolve = function() {
        deferredValues = arguments;
        for (var i = 0; i < resolveCallbacks.length; i++) {
            resolveCallbacks[i].apply(null, deferredValues);
        }
        isResolved = true;
        return self;
    };

    this.failed = function(rejectHandler) {
        rejectCallbacks.push(rejectHandler);
        if (isRejected) {
            self.reject.apply(self, deferredValues);
        }
        return self;
    };

    this.reject = function() {
        deferredValues = arguments;
        for (var i = 0; i < rejectCallbacks.length; i++) {
            rejectCallbacks[i].apply(null, deferredValues);
        } 
        isRejected = true;
        return self;
    };

    this.then = function(resolvedHandler, rejectHandler) {
        self.done(resolvedHandler);
        self.failed(rejectHandler);
        return self;
    };
};

SAMURAIPRINCIPLE.Deferred.when = function() {
    var result = new SAMURAIPRINCIPLE.Deferred();
    var resolveCount = 0;
    var deferredCount = arguments.length;
    
    for (var i = 0; i < deferredCount; i++) {
        arguments[i].then(function() {
            if (++resolveCount === deferredCount)
                result.resolve();
        }, function() {
            result.reject();
        });
    }
    return result;
}
