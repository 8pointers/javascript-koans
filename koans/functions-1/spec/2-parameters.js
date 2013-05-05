/*jslint nomen: true*/
/*global describe, expect, it, __*/
describe('function parameters', function () {
	it('1 - should understand how parameters are passed in javascript', function () {
		var inc = function (first, second) {
			return first + (second || 1);
		};
		expect(inc(100, 23)).toBe(__);
		expect(inc(100)).toBe(__);
		// for bonus points - can you think of a case when inc would behave in an unexpected way?
		// if yes - write a test to prove it, and then fix the problem.
	});
	it('2 - should understand parameters', function () {
		var f = function (arg) {
			delete arg;
			return arg;
		};
		expect(f(123)).toBe(__);
	});
	it('3 - should understand implicit parameter \'arguments\'', function () {
		var dec = function () {
			return arguments[0] - (arguments[1] || 1);
		};
		expect(dec(123, 23)).toBe(__);
		expect(dec(101)).toBe(__);
	});
	it('4 - should understand implicit parameter \'arguments\'', function () {
		var f = function (first, second, third) {
			arguments[2] = 4;
			return first + second + third;
		};
		expect(f(1, 2, 3)).toBe(__);
	});
	it('5 - should understand implicit parameter \'arguments\'', function () {
		var typeOfArguments = function () {
			return typeof arguments;
		};
		expect(typeOfArguments(1, 2, 3)).toBe(__);
	});
	it('6 - should understand arguments.callee', function () {
		var factorial = function (n) {
			return n ? n * arguments.callee(n - 1) : 1;
		};
		expect(factorial(3)).toBe(__);
	});
	it('7 - should understand arguments', function () {
		var f = function () {
			if (arguments.length === 1) {
				return;
			} else if (arguments.length === 2) {
				return;
			} else {
				throw 'incorrect number of parameters';
			}
		}, result;
		expect(f(3)).toBe(__);
		expect(f(2, 3)).toBe(__);
		try {
			result = f(2, 3, undefined);
		} catch (error) {
			result = 'error';
		}
		expect(result).toBe(__);
	});
	it('8 - should understand function length', function () {
		var f = function (first, second) {
		};
		expect(f.length).toBe(__);
	});
});
