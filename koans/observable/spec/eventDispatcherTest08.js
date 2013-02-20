/*global beforeEach, describe, expect, it, jasmine, SAMURAIPRINCIPLE */
describe('eventDispatcher', function () {
	'use strict';
	it('should be able to cancel event propagation by returning false from event listener', function () {
		var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
			firstListener = jasmine.createSpy().andReturn(false),
			secondListener = jasmine.createSpy();
		underTest.addEventListener('EventType', firstListener);
		underTest.addEventListener('EventType', secondListener);
		underTest.dispatchEvent('EventType', 'argument');

		expect(firstListener).toHaveBeenCalledWith('argument');

		expect(secondListener).not.toHaveBeenCalled();
	});
});
