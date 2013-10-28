/*global beforeEach, describe, expect, it, jasmine, SAMURAIPRINCIPLE */
describe('eventDispatcher', function () {
	'use strict';
	it('should invoke all listeners even if one of them throws an error', function () {
		var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
			badListener = jasmine.createSpy().andThrow('Error!'),
			goodListener = jasmine.createSpy();
		underTest.addEventListener('EventType', badListener);
		underTest.addEventListener('EventType', goodListener);

		underTest.dispatchEvent('EventType', 'argument');

		expect(badListener).toHaveBeenCalledWith('argument');
		expect(goodListener).toHaveBeenCalledWith('argument');
	});
});
