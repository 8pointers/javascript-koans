/*global describe, it*/
describe('Game of Life', function () {
	describe('Determining whether cell is alive in next generation', function () {
		it('should return false when a live cell has fewer than two live neighbours - under-population', function () {
			expect(isCellAliveInNextGeneration(true, 1)).toBe(false);
		});
		it('should return true when a live cell has two or three live neighbours - survival', function () {
			expect(isCellAliveInNextGeneration(true, 2)).toBe(true);
			expect(isCellAliveInNextGeneration(true, 3)).toBe(true);
		});
		it('should return false when a live cell has more than three live neighbours - overcrowding', function () {
			expect(isCellAliveInNextGeneration(true, 4)).toBe(false);
		});
		it('should return true when a dead cell has exactly three live neighbours - reproduction', function () {
			expect(isCellAliveInNextGeneration(false, 3)).toBe(true);
			expect(isCellAliveInNextGeneration(false, 2)).toBe(false);
		});
	});
});
