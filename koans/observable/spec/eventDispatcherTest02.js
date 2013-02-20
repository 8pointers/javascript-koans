/*global beforeEach, describe, expect, it, SAMURAIPRINCIPLE */
describe('eventDispatcher', function () {
	'use strict';
	it('should use addEventListener method to add event listener', function () {
		var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
			listener = function () {};

		underTest.addEventListener(listener);

		expect(underTest.listener()).toEqual(listener);
	});
});
