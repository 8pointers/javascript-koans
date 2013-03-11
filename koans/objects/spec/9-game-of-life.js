/*jslint nomen: true*/
/*global describe, expect, it, SAMURAIPRINCIPLE*/
describe('Game of Life', function () {
	describe('Determining whether cell is alive in next generation', function () {
		it('should return false when a live cell has fewer than two live neighbours - under-population', function () {
			expect(false).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(true, 0));
			expect(false).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(true, 1));
		});
		it('should return true when a live cell has two or three live neighbours - survival', function () {
			expect(true).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(true, 2));
			expect(true).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(true, 3));
		});
		it('should return false when a live cell has more than three live neighbours - overcrowding', function () {
			expect(false).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(true, 4));
			expect(false).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(true, 5));
			expect(false).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(true, 6));
			expect(false).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(true, 7));
			expect(false).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(true, 8));
		});
		it('should return true when a dead cell has exactly three live neighbours - reproduction', function () {
			expect(true).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(false, 3));
			expect(false).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(false, 2));
			expect(false).toBe(SAMURAIPRINCIPLE.isCellAliveInNextGeneration(false, 4));
		});
	});
});
