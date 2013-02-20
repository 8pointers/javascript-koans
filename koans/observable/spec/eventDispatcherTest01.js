/*global beforeEach, describe, expect, it, SAMURAIPRINCIPLE */
describe('eventDispatcher', function () {
	'use strict';
	it('should use eventDispatcher as a mixin', function () {
		var base = {}, result;

		result = SAMURAIPRINCIPLE.eventDispatcher(base);

		expect(result).toBe(base);
	});
});
