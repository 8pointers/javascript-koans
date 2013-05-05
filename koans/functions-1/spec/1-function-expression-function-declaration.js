/*jslint nomen: true*/
/*global describe, expect, it, __*/
describe('function expression and function declaration', function () {
	it('1 - should understand function expression', function () {
		expect(typeof f).toBe(__);
		var f = function () {
			return 123;
		}, g = f;
		expect(typeof f).toBe(__);
		expect(f()).toBe(__);
		expect(f === g).toBe(__);
	});
	it('2 - should understand function declaration', function () {
		expect(typeof f).toBe(__);
		function f() {
			return 123;
		}
		expect(typeof f).toBe(__);
		expect(f()).toBe(__);
	});
	it('3 - should understand function declaration', function () {
		//Try running this test in IE 6-7 too; note different behaviour
		//Discuss with your pair
		var f, result;
		expect(typeof f).toBe(__);
		expect(typeof g).toBe(__);
		f = function g() {
			return 123;
		};
		expect(typeof f).toBe(__);
		expect(typeof g).toBe(__);
		expect(f()).toBe(__);
		try {
			result = g();
		} catch (error) {
			result = 'error';
		}
		expect(result).toBe(__);
		if (typeof g !== 'undefined') {
			expect(f === g).toBe(__);
		}
	});
	it('4 - should understand function declaration', function () {
		//Try running this test in IE 6-7 too
		//Discuss with your pair
		var result = 1;
		if (function f() {}) {
			result += typeof f;
		}
		expect(result).toBe(__);
	});
	it('5 - should understand function expression and declaration', function () {
		var f = function factorial(number) {
			return number ? number * factorial(number - 1) : 1;
		}, result;
		try {
			result = f(3);
		} catch (error) {
			result = 'error';
		}
		expect(result).toBe(__);
		expect(typeof factorial).toBe(__);
	});
	it('6 - should understand the impact of anonymous functions on stack traces', function () {
		//uncomment the line below and run the test; check the call stack
		//debugger;
	});
	it('7 - should understand the impact of anonymous functions on stack traces', function noLongerAnonymousFunction() {
		//uncomment the line below and run the test; check the call stack; compare with previous one
		//debugger;
	});
});
