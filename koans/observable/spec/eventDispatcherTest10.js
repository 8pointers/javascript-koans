/*global beforeEach, describe, expect, it, jasmine, SAMURAIPRINCIPLE */
describe('eventDispatcher', function () {
	'use strict';
	it('should be able to specify observable properties', function () {
		var underTest = SAMURAIPRINCIPLE.eventDispatcher({}),
			listener = jasmine.createSpy();
		underTest.createObservableProperty('Balance');
		underTest.onBalanceChanged(listener);

		underTest.setBalance(123.45);

		expect(underTest.getBalance()).toBe(123.45);
		expect(listener).toHaveBeenCalledWith(123.45);
	});
});
