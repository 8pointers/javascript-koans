/*jslint nomen: true*/
/*global describe, expect, it, __*/
describe('prototype', function () {
	it('1 - should understand prototype', function () {
		var Person = function () {
		}, instance;
		Person.prototype = {
			name: 'default name'
		};
		instance = new Person();
		expect(instance.name).toBe(__);
		expect(Person.prototype.isPrototypeOf(instance)).toBe(__);
	});
	it('2 - should understand prototype', function () {
		var Person = function () {
		}, instance;
		instance = new Person();
		Person.prototype = {
			name: 'default name'
		};
		expect(instance.name).toBe(__);
		expect(Person.prototype.isPrototypeOf(instance)).toBe(__);
	});
	it('3 - should understand prototype', function () {
		var Person = function () {
		}, firstInstance = new Person(), secondInstance, thirdInstance;
		expect(firstInstance.name).toBe(__);
		Person.prototype.name = 'before';
		secondInstance = new Person();
		expect(firstInstance.name).toBe(__);
		expect(secondInstance.name).toBe(__);
		Person.prototype = {
			name: 'after'
		};
		thirdInstance = new Person();
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
	it('4 - should understand prototype & delete', function () {
		var Person = function () {
		}, instance;
		Person.prototype.name = 'default name';
		instance = new Person();
		expect(instance.name).toBe(__);
		delete Person.prototype.name;
		expect(instance.name).toBe(__);
	});
});
