describe('Functions - method as a callback', function () {
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
	}, simulateAjax = function (successCallback) {
		successCallback('new name');
	};
	it('1 - should understand passing a method as callback', function () {
		var model = createModel1();
		simulateAjax(model.setName);
		expect(model.name).toBe(__);
		expect(__).toBe('new name');
	});
	it('2 - should understand how to manually enforce scope', function () {
		var model = createModel1();
		simulateAjax(function (name) {
			model.setName(name);
		});
		expect(model.name).toBe(__);
		expect(__).toBe('new name');
	});
	it('3 - should understand how to use bind to enforce scope', function () {
		var model = createModel1();
		simulateAjax(model.setName.bind(model));
		expect(model.name).toBe(__);
		expect(__).toBe('new name');
	});
	it('4 - should understand the consequences of not using this keyword to access own properties', function () {
		var model = createModel2();
		simulateAjax(model.setName);
		expect(model.name).toBe(__);
		expect(__).toBe('new name');
	});
	/*
	discuss with your pair:
		- what are pros and cons of first and second approach (createModel1 and createModel2)?
	 */
});
