/*global beforeEach, describe, expect, it, jasmine, SAMURAIPRINCIPLE */
describe('eventDispatcher', function () {
	'use strict';
	it('should be able to add multiple listeners', function () {
		var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
			firstListener = jasmine.createSpy(),
			secondListener = jasmine.createSpy();
		underTest.addEventListener(firstListener);
		underTest.addEventListener(secondListener);

		underTest.dispatchEvent('argument');

		expect(firstListener).toHaveBeenCalledWith('argument');
		expect(secondListener).toHaveBeenCalledWith('argument');
	});
});
