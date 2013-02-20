/*jslint nomen: true*/
/*global describe, expect, it, __*/
describe('Object literals', function () {
	it('1 - should make sure that tests are setup correctly', function () {
		expect(1).toBe(__);
	});
	it('2 - should understand object literals', function () {
		var samurai = {
			age: 32,
			isMaster: true,
			name: 'Myamoto',
			'date-of-birth': new Date(),
			address: {
				street: 'Samurai Way 12',
				postcode: 'SW123'
			},
			weapons: ['katana', 'tanto'],
			greet: function () {
				return 'Hello';
			}
		};
		expect(typeof samurai).toBe(__);
	});
});
