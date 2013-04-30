describe('Game of Life', function () {
	it('should make sure all the cells are dead when a new game is created', function () {
		var gameOfLife = new SAMURAIPRINCIPLE.GameOfLife(), isCellAlive;

		isCellAlive = gameOfLife.isCellAlive(2, 3);

		expect(isCellAlive).toBe(false);
	});
});
