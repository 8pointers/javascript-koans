describe('Invocation patterns', function() {
  let storedThis;
  let aFunction;
  let samurai;
  beforeEach(function() {
    storedThis = undefined;
    aFunction = function() {
      storedThis = this;
    };
    samurai = {
      aMethod: aFunction
    };
  });
  describe('method', function() {
    test('1 - should understand method invocation pattern', function() {
      samurai.aMethod();
      expect(storedThis).toBe(__);
    });
    test('2 - should understand method invocation pattern', function() {
      const samurai2 = {
        aMethod: samurai.aMethod
      };
      samurai2.aMethod();
      expect(storedThis).toBe(__);
    });
    test('3 - should understand method invocation pattern', function() {
      const samurai2 = {
        samurai: samurai,
        aMethod: samurai.aMethod
      };
      samurai2.samurai.aMethod();
      expect(storedThis).toBe(__);
      samurai2.aMethod();
      expect(storedThis).toBe(__);
    });
  });

  describe('function', function() {
    test('4 - should understand function invocation pattern', function() {
      aFunction();
      expect(storedThis).toBe(__);
    });
    test('5 - should understand function invocation pattern', function() {
      //try and decipher this for bonus points
      const result = (function() {
        return this;
      })();
      expect(result).toBe(__);
    });
    test('6 - should understand function invocation pattern', function() {
      const myMethod = samurai.aMethod;
      aFunction();
      expect(storedThis).toBe(__);
      samurai.aMethod();
      expect(storedThis).toBe(__);
      myMethod();
      expect(storedThis).toBe(__);
    });
    test('7 - should understand strict mode', function() {
      let storedThis;
      const strictMethod = function() {
        'use strict';
        storedThis = this;
      };
      strictMethod();
      expect(storedThis).toBe(__);
    });
  });

  describe('constructor', function() {
    test('8 - should understand constructor invocation pattern', function() {
      const Constructor1 = aFunction;
      const Constructor2 = samurai.aMethod;
      const s1 = new Constructor1();
      expect(storedThis).toBe(__);
      const s2 = new Constructor2();
      expect(storedThis).toBe(__);
      const s3 = new aFunction();
      expect(storedThis).toBe(__);
      const s4 = new samurai.aMethod();
      expect(storedThis).toBe(__);
    });
    test('9 - should understand constructor invocation pattern', function() {
      const Samurai = function(name) {
        this.getName = function() {
          return name;
        };
        this.setName = function(value) {
          name = value;
        };
      };
      const name = 'Myamoto';
      const samurai = new Samurai(name);
      expect(name).toBe(__);
      expect(samurai.name).toBe(__);
      expect(samurai.getName()).toBe(__);
      samurai.setName('Hattori');
      expect(name).toBe(__);
      expect(samurai.getName()).toBe(__);
      samurai.name = 'Myamoto';
      expect(samurai.name).toBe(__);
      expect(samurai.getName()).toBe(__);
    });
    test('10 - should understand instanceof', function() {
      const Samurai = function(name) {
        this.getName = function() {
          return name;
        };
        this.setName = function(value) {
          name = value;
        };
      };
      const samurai = new Samurai('Myamoto');
      expect(samurai instanceof Samurai).toBe(__);
      expect(samurai instanceof Object).toBe(__);
      expect(samurai instanceof Array).toBe(__);
      expect(samurai.constructor).toBe(__);
    });
  });

  describe('call/apply', function() {
    test('11 - should understand call-apply invocation pattern', function() {
      const samurai2 = {
        aMethod: aFunction
      };
      const samurai3 = {};
      samurai.aMethod.call(samurai2);
      expect(storedThis).toBe(__);
      samurai.aMethod.apply(samurai3, []);
      expect(storedThis).toBe(__);
    });
  });

  describe('fat-arrow functions', function() {
    test('12 - should understand calling fat-arrow functions as methods', function() {
      const self = this;
      let storedThis;
      const person = {
        name: 'First',
        setName: name => {
          storedThis = this;
          this.name = name;
        }
      };

      person.setName('Second');

      expect(storedThis).toBe(__);
      expect(person.name).toBe(__);
      expect(self.name).toBe(__);
    });
    test('13 - should understand calling fat-arrow functions as functions', function() {
      const self = this;
      let storedThis;
      const person = {
        name: 'First',
        setName: name => {
          storedThis = this;
          this.name = name;
        }
      };
      const setName = person.setName;

      setName('Second');

      expect(storedThis).toBe(__);
      expect(person.name).toBe(__);
      expect(self.name).toBe(__);
    });
    test('14 - should understand calling fat-arrow functions as constructors', function() {
      const self = this;
      let storedThis;
      const person = {
        name: 'First',
        setName: name => {
          storedThis = this;
          this.name = name;
        }
      };
      let result;

      try {
        result = new person.setName('Second');
      } catch (e) {
        result = e;
      }

      expect(result).toEqual(__);
      expect(storedThis).toBe(__);
      expect(person.name).toBe(__);
      expect(self.name).toBe(__);
    });
    test('15 - should understand calling fat-arrow functions using call/apply', function() {
      const self = this;
      let storedThis;
      const person = {
        name: 'First',
        setName: name => {
          storedThis = this;
          this.name = name;
        }
      };
      const anotherPerson = {};

      person.setName.call(anotherPerson, 'Second');

      expect(storedThis).toBe(__);
      expect(person.name).toBe(__);
      expect(self.name).toBe(__);
      expect(anotherPerson.name).toBe(__);
    });
  });

  test('16 - should understand invocation patterns', function() {
    expect(this).toBe(__); //what have you expected to happen here? what happened and why? discuss with your pair!
  });
});
