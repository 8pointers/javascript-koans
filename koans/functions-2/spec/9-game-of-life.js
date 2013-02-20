/*global it, describe, expect, isCellAliveInNextGeneration, SAMURAIPRINCIPLE */
describe('Game of Life', function () {
	describe('Creating a new life using lifeBuilder', function () {
		it('should create a new life with no live cells when build method is called', function () {
			var underTest, isCellInFirstRowThirdColumnAlive;
			underTest = SAMURAIPRINCIPLE.lifeBuilder().build();
			isCellInFirstRowThirdColumnAlive = underTest.isCellAlive(1, 3);
			expect(isCellInFirstRowThirdColumnAlive).toBe(false);
		});
		it('should create a new life with specified live cells when build method is called', function () {
			var underTest, isCellInFirstRowThirdColumnAlive, isCellInSecondRowFourthColumnAlive; 
			underTest = SAMURAIPRINCIPLE.lifeBuilder()
				.addLiveCell(1, 3)
										.addLiveCell(2, 4)
				.build();
			isCellInFirstRowThirdColumnAlive = underTest.isCellAlive(1, 3);
			isCellInSecondRowFourthColumnAlive = underTest.isCellAlive(2, 4);
			expect(isCellInFirstRowThirdColumnAlive).toBe(true);
			expect(isCellInSecondRowFourthColumnAlive).toBe(true);
		});
	});
	describe('Determining whether cell is alive in next generation', function () {
		it('should be dead when a live cell has fewer than two live neighbours - under-population', function () {
			var underTest = SAMURAIPRINCIPLE.lifeBuilder()
				.addLiveCell(0, 0).addLiveCell(0, 2)
										.addLiveCell(1, 2)
				.build();
			underTest.tick();
			expect(underTest.isCellAlive(0, 0)).toBe(false);
			expect(underTest.isCellAlive(0, 2)).toBe(false);
		});
		it('should be alive when a live cell has two or three live neighbours - survival', function () {
			var underTest = SAMURAIPRINCIPLE.lifeBuilder()
				.addLiveCell(0, 0).addLiveCell(0, 1)
										.addLiveCell(1, 1)
										.addLiveCell(2, 1)
				.build();
			underTest.tick();
			expect(underTest.isCellAlive(0, 1)).toBe(true);
			expect(underTest.isCellAlive(1, 1)).toBe(true);
		});
		it('should be dead when a live cell has more than three live neighbours - overcrowding', function () {
			var underTest = SAMURAIPRINCIPLE.lifeBuilder()
				.addLiveCell(0, 0).addLiveCell(0, 1).addLiveCell(0, 2)
				.addLiveCell(1, 0).addLiveCell(1, 1).addLiveCell(1, 2).addLiveCell(1, 3)
				.addLiveCell(2, 0).addLiveCell(2, 1).addLiveCell(2, 2)
				.addLiveCell(3, 0)						.addLiveCell(3, 2)
				.build();
			underTest.tick();
			expect(underTest.isCellAlive(0, 1)).toBe(false);
			expect(underTest.isCellAlive(0, 2)).toBe(false);
			expect(underTest.isCellAlive(1, 1)).toBe(false);
			expect(underTest.isCellAlive(1, 2)).toBe(false);
			expect(underTest.isCellAlive(2, 1)).toBe(false);
		});
		it('should be alive when a dead cell has exactly three live neighbours - reproduction', function () {
			var underTest = SAMURAIPRINCIPLE.lifeBuilder()
				.addLiveCell(0, 0).addLiveCell(0, 1).addLiveCell(0, 2)
				.build();
			underTest.tick();
			expect(underTest.isCellAlive(1, 1)).toBe(true);
			expect(underTest.isCellAlive(1, 2)).toBe(false);
			expect(underTest.isCellAlive(1, 3)).toBe(false);
		});
		it('should oscillate :)', function () {
			var underTest = SAMURAIPRINCIPLE.lifeBuilder()
				.addLiveCell(1, 0).addLiveCell(1, 1).addLiveCell(1, 2)
				.build();
			underTest.tick();
			expect(underTest.isCellAlive(0, 1)).toBe(true);
			expect(underTest.isCellAlive(1, 1)).toBe(true);
			expect(underTest.isCellAlive(2, 1)).toBe(true);
			underTest.tick();
			expect(underTest.isCellAlive(1, 0)).toBe(true);
			expect(underTest.isCellAlive(1, 1)).toBe(true);
			expect(underTest.isCellAlive(1, 2)).toBe(true);
		});
		it('should oscillate for large grids too :)', function () {
			var n = 1000000000, underTest = SAMURAIPRINCIPLE.lifeBuilder()
				.addLiveCell(0, 0).addLiveCell(0, 2 * n)
				.addLiveCell(n, n - 1).addLiveCell(n, n).addLiveCell(n, n + 1)
				.addLiveCell(2 * n, 0).addLiveCell(2 * n, 2 * n)
				.build();
			underTest.tick();
			expect(underTest.isCellAlive(0, 0)).toBe(false);
			expect(underTest.isCellAlive(n - 1, n)).toBe(true);
			expect(underTest.isCellAlive(n, n)).toBe(true);
			expect(underTest.isCellAlive(n + 1, n)).toBe(true);
		});
	});
});
