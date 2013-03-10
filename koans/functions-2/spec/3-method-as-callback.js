describe('Functions - method as a callback', function () {
	beforeEach(function () {
		window.name = 'window name';
	});
	it('0 - warmup (a brief refresh on invocation patterns)', function () {
		var model = {
			name: 'original name',
			setName: function (value) {
				this.name = value;
			}
		}, fn = model.setName;
		fn('new name');
		expect(model.name).toBe(__);
		expect(window.name).toBe(__);
	});
	var createModel1 = function () {
		var result = {
			name: 'original name',
			setName: function (value) {
				this.name = value;
			}
		};
		return result;
	}, createModel2 = function () {
		var result = {
			name: 'original name',
			setName: function (value) {
				result.name = value;
			}
		};
		return result;
	}, CreateModel3 = function () {
		this.name = 'original name';
		this.setName = function (value) {
			this.name = value;
		};
	}, CreateModel4 = function () {
		var self = this;
		this.name = 'original name';
		this.setName = function (value) {
			self.name = value;
		};
	}, CreateModel5 = function () {
	}, simulateAjax = function (successCallback) {
		successCallback('new name');
	};
	CreateModel5.prototype.name = 'original name';
	CreateModel5.prototype.setName = function (value) {
		this.name = value;
	};
	it('1 - should understand passing a method as callback', function () {
		var model = createModel1();
		simulateAjax(model.setName);
		expect(model.name).toBe(__);
		expect(window.name).toBe(__);
	});
	it('2 - should understand how to manually enforce scope', function () {
		var model = createModel1();
		simulateAjax(function (name) {
			model.setName(name);
		});
		expect(model.name).toBe(__);
		expect(window.name).toBe(__);
	});
	it('3 - should understand how to use bind to enforce scope', function () {
		var model = createModel1();
		simulateAjax(model.setName.bind(model));
		expect(model.name).toBe(__);
		expect(window.name).toBe(__);
	});
	it('4 - should understand the consequences of not using this keyword to access own properties', function () {
		var model = createModel2();
		simulateAjax(model.setName);
		expect(model.name).toBe(__);
		expect(window.name).toBe(__);
	});
	/*
	discuss with your pair:
		- what are pros and cons of first and second approach (createModel1 and createModel2)?
	 */
	it('5 - should understand passing a method as callback', function () {
		var model = new CreateModel3();
		simulateAjax(model.setName);
		expect(model.name).toBe(__);
		expect(window.name).toBe(__);
	});
	it('6 - should understand passing a method as callback', function () {
		var model = new CreateModel4();
		simulateAjax(model.setName);
		expect(model.name).toBe(__);
		expect(window.name).toBe(__);
	});
	it('7 - should understand passing a method as callback', function () {
		var model = new CreateModel5();
		simulateAjax(model.setName);
		expect(model.name).toBe(__);
		expect(window.name).toBe(__);
	});
});
