/*global beforeEach, describe, expect, it, SAMURAIPRINCIPLE*/
describe('Game of Life', function () {
  var gameOfLife;
  beforeEach(function () {
    gameOfLife = new SAMURAIPRINCIPLE.GameOfLife();
  });
  it('should make sure all the cells are dead when a new game is created', function () {
    var isCellAlive;

    isCellAlive = gameOfLife.isCellAlive(2, 3);

    expect(isCellAlive).toBe(false);
  });
  it('should set the cell state to alive when toggleCellState method is called', function () {
    gameOfLife.toggleCellState(2, 3);

    expect(gameOfLife.isCellAlive(2, 3)).toBe(true);
  });
  it('should set the cell state to dead in next generation if the cell is alive in current generation and has less than 2 neighbours', function () {
    gameOfLife.toggleCellState(2, 3);

    gameOfLife.tick();

    expect(gameOfLife.isCellAlive(2, 3)).toBe(false);
  });
  it('should keep the cell alive in next generation if the cell has two or three live neighbours', function () {
    gameOfLife.toggleCellState(2, 3).toggleCellState(2, 4).toggleCellState(2, 5);

    gameOfLife.tick();

    expect(gameOfLife.isCellAlive(2, 4)).toBe(true);
  });
  it('should set the cell state to dead in next generation if the cell is alive in current generation and has more than 3 neighbours', function () {
    gameOfLife.toggleCellState(2, 2).toggleCellState(2, 3).toggleCellState(2, 4)
                    .toggleCellState(3, 3)
                    .toggleCellState(4, 3);

    gameOfLife.tick();

    expect(gameOfLife.isCellAlive(3, 3)).toBe(false);
  });
  it('should set the cell state to alive in next generation if the cell is dead and has three live neighbours', function () {
    gameOfLife.toggleCellState(2, 3).toggleCellState(2, 4).toggleCellState(2, 5);

    gameOfLife.tick();

    expect(gameOfLife.isCellAlive(3, 4)).toBe(true);
  });
});
