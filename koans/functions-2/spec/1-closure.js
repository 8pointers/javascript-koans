/*jslint nomen: true*/
/*global beforeEach, describe, expect, it, __*/
describe('Warmup - timers and asynchronous specs', function () {
	/*
		tip: if change describe into xdescribe the suite will no longer be executed
		you may wish to do that when you move onto the second part of the assignement (because this is a long running suite)
	*/
	it('1 - should understand timers', function () {
		var i = 0;
		setTimeout(function () {
			i = 1;
		}, 100);
		waits(90);
		runs(function () {
			expect(i).toBe(__);
		});
		waits(110);
		runs(function () {
			expect(i).toBe(__);
		});
		expect(i).toBe(__);
	});
	it('2 - should understand timers', function () {
		var i = 0;
		expect(i).toBe(__);
		setTimeout(function () {
			i = 1;
		}, 0);
		expect(i).toBe(__);
		waits(1);
		runs(function () {
			expect(i).toBe(__);
		});
		expect(i).toBe(__);
	});
	it('3 - should understand timers', function () {
		var i = 0, loopDueTime = new Date().getTime() + 600;
		setTimeout(function () {
			i = 1;
		}, 300);
		while (new Date().getTime() <= loopDueTime);
		expect(i).toBe(__);
		waits(0);
		runs(function () {
			expect(i).toBe(__);
		})
		expect(i).toBe(__);
	});
});
describe('Closure', function () {
	it('1 - should understand loop and closure', function () {
		var i, debugElement = jQuery('#debug');
		debugElement.text('');
		for (i = 0; i < 3; i++) {
			setTimeout(function () {
				debugElement.append(i);
			}, 1000 * i);
		}
		waits(4000);
		runs(function () {
			expect(debugElement.text()).toBe(__);
			//discuss this with your pair
			//now change the code within setTimeout (and within setTimeout only) so that expected result is '123'
		});
	});
});
