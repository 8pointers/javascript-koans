describe('prototype', function() {
  test('1 - should understand prototype', function() {
    const Person = function() {};
    Person.prototype = {
      name: 'default name'
    };
    const instance = new Person();
    expect(instance.name).toBe(__);
    expect(Person.prototype.isPrototypeOf(instance)).toBe(__);
  });
  test('2 - should understand prototype', function() {
    const Person = function() {};
    const instance = new Person();
    Person.prototype = {
      name: 'default name'
    };
    expect(instance.name).toBe(__);
    expect(Person.prototype.isPrototypeOf(instance)).toBe(__);
  });
  test('3 - should understand prototype', function() {
    const Person = function() {};
    const firstInstance = new Person();
    expect(firstInstance.name).toBe(__);
    Person.prototype.name = 'before';
    const secondInstance = new Person();
    expect(firstInstance.name).toBe(__);
    expect(secondInstance.name).toBe(__);
    Person.prototype = {
      name: 'after'
    };
    const thirdInstance = new Person();
    expect(firstInstance.name).toBe(__);
    expect(secondInstance.name).toBe(__);
    expect(thirdInstance.name).toBe(__);
    Person.prototype.name = 'even more after';
    expect(firstInstance.name).toBe(__);
    expect(secondInstance.name).toBe(__);
    expect(thirdInstance.name).toBe(__);

    expect(Person.prototype.isPrototypeOf(firstInstance)).toBe(__);
    expect(Person.prototype.isPrototypeOf(secondInstance)).toBe(__);
    expect(Person.prototype.isPrototypeOf(thirdInstance)).toBe(__);
  });
  test('4 - should understand prototype & delete', function() {
    const Person = function() {};
    Person.prototype.name = 'default name';
    const instance = new Person();
    expect(instance.name).toBe(__);
    delete Person.prototype.name;
    expect(instance.name).toBe(__);
  });
  test('5 - should understand prototype', function() {
    const Person = function() {};
    Person.prototype.name = 'default name';
    Person.prototype.address = {
      street: 'Kosovska 51',
      postcode: '11000'
    };
    const firstInstance = new Person();
    const secondInstance = new Person();
    firstInstance.name = 'new name';
    firstInstance.address.street = 'Kosovska 49';
    expect(secondInstance.name).toBe(__);
    expect(secondInstance.address.street).toBe(__);
  });
  test('6 - should understand prototypes - angularjs scopes (Scope.prototype.$new)', function() {
    const parentScope = {
      name: 'default name',
      address: {
        street: 'Kosovska 51',
        postcode: '11000'
      }
    };
    const createChildScope = function(parentScope) {
      const ChildScopeConstructor = function() {};
      ChildScopeConstructor.prototype = parentScope;
      return new ChildScopeConstructor();
    };
    const childScope = createChildScope(parentScope);
    expect(parentScope.name).toBe(__);
    expect(childScope.name).toBe(__);
    childScope.name = 'new name';
    expect(parentScope.name).toBe(__);
    expect(childScope.name).toBe(__);
    expect(parentScope.address.street).toBe(__);
    expect(childScope.address.street).toBe(__);
    childScope.address.street = 'Kosovska 49';
    expect(parentScope.address.street).toBe(__);
    expect(childScope.address.street).toBe(__);
  });
  test('7 - somewhat like classes - methods, "super", inheritance...', function() {
    const Person = function(name) {
      this.name = name;
    };
    Person.prototype.getName = function() {
      return this.name;
    };
    Person.prototype.setName = function(name) {
      this.name = name;
    };
    const Samurai = function(name, weapon) {
      Person.call(this, name);
      this.weapon = weapon;
    };

    // Option 1:
    const T = function() {};
    T.prototype = Person.prototype;
    Samurai.prototype = new T();
    // Option 2:
    // Samurai.prototype = new Person();

    Samurai.prototype.useWeapon = function() {
      return `${this.name} is now using ${this.weapon}!`;
    };
    const samurai = new Samurai('Myamoto', 'katana');
    expect(samurai.getName()).toBe(__);
    samurai.setName('Hattori');
    expect(samurai.useWeapon()).toBe(__);
  });
});
