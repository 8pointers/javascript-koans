/*global describe, expect, it, __*/
describe('Arrays - accessor methods', function () {
	it('1 - should understand concat', function () {
		var first = [1, 2, 3], second = [4, 5, 6];
		expect(first.concat(second)).toEqual(__);
		expect(first).toEqual(__);
		expect(second).toEqual(__);
	});
	it('2 - should understand join', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.join('-')).toBe(__);
	});
	it('3 - should understand join', function () {
		var array = new Array(10);
		expect(array.join('.-')).toBe(__);
	});
	it('4 - should understand split', function () {
		expect('1-2-3-4-5-6-7-8-9-10'.split('-')).toEqual(__);
	});
	it('5 - should understand split', function () {
		expect('.-.-.-.-.-.-.-.-.-.'.split('-')).toEqual(__);
	});
	it('6 - should understand join and split', function () {
		expect(new Array(10).join('._').split('_')).toEqual(__);
	});
	it('7 - should understand slice', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.slice(1, 4)).toEqual(__);
		expect(array).toEqual(__);
		expect(array.slice(1)).toEqual(__);
		expect(array.slice(1, -1)).toEqual(__);
		expect(array.slice(-3, -1)).toEqual(__);
	});
	it('8 - should understand toString', function () {
		var array = [1, 3, 5, 'hello', 9];
		expect(array.toString()).toBe(__);
	});
	it('9 - should understand indexOf', function () {
		var array = [1, 1, 3, 3, 5, 5, 7, 7];
		expect(array.indexOf(3)).toBe(__);
		expect(array.indexOf(2)).toBe(__);
	});
	it('10 - should understand lastIndexOf', function () {
		var array = [1, 1, 3, 3, 5, 5, 7, 7];
		expect(array.lastIndexOf(3)).toBe(__);
		expect(array.lastIndexOf(2)).toBe(__);
	});
});
