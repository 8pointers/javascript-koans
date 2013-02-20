/*global beforeEach, describe, expect, it, jasmine, SAMURAIPRINCIPLE */
describe('eventDispatcher', function () {
	'use strict';
	it('should be able to specify the order in which listeners are invoked, by setting priority', function () {
		var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
			result = ':',
			lowPriorityListener = function () { result += 'first:'; },
			highPriorityListener = function () { result += 'second:'; };
		underTest.addEventListener('EventType', lowPriorityListener, 1);
		underTest.addEventListener('EventType', highPriorityListener, 2);

		underTest.dispatchEvent('EventType', 'argument');

		expect(result).toBe(':second:first:');
	});
});
