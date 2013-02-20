/*global beforeEach, describe, expect, it, jasmine, SAMURAIPRINCIPLE */
describe('eventDispatcher', function () {
	'use strict';
	it('should be able to add listener for an event type', function () {
		var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
			listenerOnTypeA = jasmine.createSpy(),
			listenerOnTypeB = jasmine.createSpy();
		underTest.addEventListener('TypeA', listenerOnTypeA);
		underTest.addEventListener('TypeB', listenerOnTypeB);

		underTest.dispatchEvent('TypeA', 'argument');

		expect(listenerOnTypeA).toHaveBeenCalledWith('argument');
		expect(listenerOnTypeB).not.toHaveBeenCalled();
	});
});
