describe('Functions - method as a callback', function() {
  beforeEach(function() {
    window.name = 'window name';
  });
  test('0 - warmup (a brief refresh on invocation patterns)', function() {
    const model = {
      name: 'original name',
      setName: function(value) {
        this.name = value;
      }
    };
    const fn = model.setName;
    fn('new name');
    expect(model.name).toBe(__);
    expect(window.name).toBe(__);
  });
  const createModel1 = function() {
    const result = {
      name: 'original name',
      setName: function(value) {
        this.name = value;
      }
    };
    return result;
  };
  const simulateAjax = function(successCallback) {
    successCallback('new name');
  };
  test('1 - should understand passing a method as callback', function() {
    const model = createModel1();
    simulateAjax(model.setName);
    expect(model.name).toBe(__);
    expect(window.name).toBe(__);
  });
  test('2 - should understand how to manually enforce scope', function() {
    const model = createModel1();
    simulateAjax(function(name) {
      model.setName(name);
    });
    expect(model.name).toBe(__);
    expect(window.name).toBe(__);
  });
  test('3 - should understand how to use bind to enforce scope', function() {
    const model = createModel1();
    simulateAjax(model.setName.bind(model));
    expect(model.name).toBe(__);
    expect(window.name).toBe(__);
  });
  test('4 - should understand the consequences of not using this keyword to access own properties', function() {
    const createModel2 = function() {
      const result = {
        name: 'original name',
        setName: function(value) {
          result.name = value;
        }
      };
      return result;
    };
    const model = createModel2();

    simulateAjax(model.setName);

    expect(model.name).toBe(__);
    expect(window.name).toBe(__);
  });
  /*
  discuss with your pair:
    - what are pros and cons of first and second approach (createModel1 and createModel2)?
   */
  test('5 - should understand passing a method as callback', function() {
    const CreateModel3 = function() {
      this.name = 'original name';
      this.setName = function(value) {
        this.name = value;
      };
    };
    const model = new CreateModel3();

    simulateAjax(model.setName);

    expect(model.name).toBe(__);
    expect(window.name).toBe(__);
  });
  test('6 - should understand passing a method as callback', function() {
    const CreateModel4 = function() {
      const self = this;
      this.name = 'original name';
      this.setName = function(value) {
        self.name = value;
      };
    };
    const model = new CreateModel4();

    simulateAjax(model.setName);

    expect(model.name).toBe(__);
    expect(window.name).toBe(__);
  });
  test('7 - should understand passing a method as callback', function() {
    const CreateModel5 = function() {};
    CreateModel5.prototype.name = 'original name';
    CreateModel5.prototype.setName = function(value) {
      this.name = value;
    };
    const model = new CreateModel5();

    simulateAjax(model.setName);

    expect(model.name).toBe(__);
    expect(window.name).toBe(__);
  });
  test('8 - should understand passing a method as callback', function() {
    class CreateModel6 {
      constructor() {
        this.name = 'original name';
      }
      setName(name) {
        this.name = name;
      }
    }
    const model = new CreateModel6();
    try {
      simulateAjax(model.setName);
    } catch (e) {
      expect(e).toEqual(__);
    }
    expect(model.name).toBe(__);
    expect(window.name).toBe(__);
  });
});
