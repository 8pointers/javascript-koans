/*global beforeEach, describe, expect, it, jasmine, SAMURAIPRINCIPLE*/
describe('Game of Life', function () {
	'use strict';
	var gameOfLife, cellStateChangedListener;
	beforeEach(function () {
		gameOfLife = new SAMURAIPRINCIPLE.GameOfLife();
		cellStateChangedListener = jasmine.createSpy('cellStateChangedListener');
		gameOfLife.addEventListener('cellStateChanged', cellStateChangedListener);
	});
	it('should dispatch cellStateChanged event when dead cell becomes alive', function () {
		gameOfLife.toggleCellState(2, 3);

		expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, true);
	});
	it('should dispatch cellStateChanged event when alive cell dies', function () {
		gameOfLife.toggleCellState(2, 3);

		gameOfLife.toggleCellState(2, 3);

		expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, false);
	});
});
