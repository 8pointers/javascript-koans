/*jslint nomen: true*/
/*global beforeEach, describe, expect, it, window, __*/
var a = 1;
b = 2;
eval('var c = 3;');
eval('d = 4;');
describe('Delete', function () {
	var samurai;
	beforeEach(function () {
		samurai = {
			name: 'Myamoto',
			address: {
				street: 'Samurai Way',
				postcode: '18+'
			}
		};
	});
	it('1 - should understand delete operator', function () {
		var result;
		result = delete samurai.name;
		expect(result).toBe(__);
		expect(samurai.name).toBe(__);
	});
	it('2 - should understand delete operator vs. setting property value to undefined', function () {
		var object = {
			propertyName: 'propertyValue'
		}, properties, name;

		properties = '';
		object.propertyName = undefined;
		expect(object.propertyName).toBe(__);
		for (name in object) {
			properties += name;
		}
		expect(properties).toBe(__);

		properties = '';
		delete object.propertyName;
		expect(object.propertyName).toBe(__);
		for (name in object) {
			properties += name;
		}
		expect(properties).toBe(__);
		//Discuss this with your pair
		//Imagine using object as a read through cache - how would you manage the size of the cache?
	});
	it('3 - should understand how execution context affects delete operator', function () {
		expect(a).toBe(__);
		expect(window.a).toBe(__);
		expect(delete a).toBe(__);
		expect(b).toBe(__);
		expect(window.b).toBe(__);
		expect(delete b).toBe(__);
		expect(c).toBe(__);
		expect(window.c).toBe(__);
		expect(delete c).toBe(__);
		expect(d).toBe(__);
		expect(window.d).toBe(__);
		expect(delete d).toBe(__);
	});
	it('4 - should understand how execution context affects delete operator', function () {
		var e = 1;
		f = 2;
		eval('var g = 3;');
		eval('h = 4;');
		expect(e).toBe(__);
		expect(window.e).toBe(__);
		expect(delete e).toBe(__);
		expect(f).toBe(__);
		expect(window.f).toBe(__);
		expect(delete f).toBe(__);
		expect(g).toBe(__);
		expect(window.g).toBe(__);
		expect(delete g).toBe(__);
		expect(h).toBe(__);
		expect(window.h).toBe(__);
		expect(delete h).toBe(__);
	});
	it('5 - should understand delete operator', function () {
		samurai.samurai = samurai;
		delete samurai.samurai.samurai;
		expect(samurai.samurai).toBe(__);
	});
	it('6 - should understand delete operator', function () {
		samurai.samurai = samurai;
		delete samurai.samurai.name;
		expect(samurai.name).toBe(__);
	});
});
