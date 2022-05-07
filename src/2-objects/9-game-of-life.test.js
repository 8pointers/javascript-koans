import isCellAliveInNextGeneration from './9-game-of-life';

describe('Game of Life', function () {
  test('should return false when a live cell has fewer than two live neighbours - under-population', function () {
    expect(isCellAliveInNextGeneration(true, 0)).toBe(false);
    expect(isCellAliveInNextGeneration(true, 1)).toBe(false);
  });
  test('should return true when a live cell has two or three live neighbours - survival', function () {
    expect(isCellAliveInNextGeneration(true, 2)).toBe(true);
    expect(isCellAliveInNextGeneration(true, 3)).toBe(true);
  });
  test('should return false when a live cell has more than three live neighbours - overcrowding', function () {
    expect(isCellAliveInNextGeneration(true, 4)).toBe(false);
    expect(isCellAliveInNextGeneration(true, 5)).toBe(false);
    expect(isCellAliveInNextGeneration(true, 6)).toBe(false);
    expect(isCellAliveInNextGeneration(true, 7)).toBe(false);
    expect(isCellAliveInNextGeneration(true, 8)).toBe(false);
  });
  test('should return true when a dead cell has exactly three live neighbours - reproduction', function () {
    expect(isCellAliveInNextGeneration(false, 3)).toBe(true);
    expect(isCellAliveInNextGeneration(false, 2)).toBe(false);
    expect(isCellAliveInNextGeneration(false, 4)).toBe(false);
  });
});
