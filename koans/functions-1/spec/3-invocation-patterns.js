/*jslint nomen: true*/
/*global beforeEach, describe, expect, it, window, __*/
describe('Invocation patterns', function () {
	var storedThis, storeThis, samurai;
	beforeEach(function () {
		storedThis = undefined;
		storeThis = function () {
			storedThis = this;
		};
		samurai = {
			storeThis: storeThis
		};
	});
	describe('method', function () {
		it('1 - should understand method invocation pattern', function () {
			samurai.storeThis();
			expect(storedThis).toBe(__);
		});
		it('2 - should understand method invocation pattern', function () {
			var samurai2 = {
				storeThis: samurai.storeThis
			};
			samurai2.storeThis();
			expect(storedThis).toBe(__);
		});
		it('3 - should understand method invocation pattern', function () {
			var samurai2 = {
				samurai: samurai,
				storeThis: samurai.storeThis
			};
			samurai2.samurai.storeThis();
			expect(storedThis).toBe(__);
			samurai2.storeThis();
			expect(storedThis).toBe(__);
		});
	});

	describe('function', function () {
		it('4 - should understand function invocation pattern', function () {
			storeThis();
			expect(storedThis).toBe(__);
		});
		it('5 - should understand function invocation pattern', function () {
			//try and decipher this for bonus points
			var result = (function () {
				return this;
			}());
			expect(result).toBe(__);
		});
		it('6 - should understand function invocation pattern', function () {
			var myStoreThis = samurai.storeThis;
			storeThis();
			expect(storedThis).toBe(__);
			samurai.storeThis();
			expect(storedThis).toBe(__);
			myStoreThis();
			expect(storedThis).toBe(__);
		});
		it('7 - should understand strict mode', function () {
			var storedThis, strictStoreThis = function () {
				'use strict';
				storedThis = this;
			};
			strictStoreThis();
			expect(storedThis).toBe(__);
		});
	});

	describe('constructor', function () {
		it('8 - should understand constructor invocation pattern', function () {
			var Constructor1 = storeThis, Constructor2 = samurai.storeThis, s1, s2, s3, s4;
			s1 = new Constructor1();
			expect(storedThis).toBe(__);
			s2 = new Constructor2();
			expect(storedThis).toBe(__);
			s3 = new storeThis();
			expect(storedThis).toBe(__);
			s4 = new samurai.storeThis();
			expect(storedThis).toBe(__);
		});
		it('9 - should understand constructor invocation pattern', function () {
			var Samurai = function (name) {
				this.getName = function () {
					return name;
				};
				this.setName = function (value) {
					name = value;
				};
			}, name = 'Myamoto', samurai = new Samurai(name);
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
		it('10 - should understand instanceof', function () {
			var Samurai = function (name) {
				this.getName = function () {
					return name;
				};
				this.setName = function (value) {
					name = value;
				};
			}, samurai = new Samurai('Myamoto');
			expect(samurai instanceof Samurai).toBe(__);
			expect(samurai instanceof Object).toBe(__);
			expect(samurai instanceof Array).toBe(__);
			expect(samurai.constructor).toBe(__);
		});
	});

	describe('call/apply', function () {
		it('11 - should understand call-apply invocation pattern', function () {
			var samurai2 = {
				storeThis: storeThis
			}, samurai3 = {};
			samurai.storeThis.call(samurai2);
			expect(__).toBe(storedThis);
			samurai.storeThis.apply(samurai3, []);
			expect(__).toBe(storedThis);
		});
	});

	/*
		When working on this spec, uncomment the expectation below.
		It's commented out because it is (in some browsers) a long running-test.
	*/
	it('12 - should understand invocation patterns', function () {
		//expect(__).toBe(this);//what have you expected to happen here? what happened and why? discuss with your pair!
	});
});
