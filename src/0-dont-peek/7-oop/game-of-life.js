// prettier-ignore
const GameOfLife = function() {
  const isAlive = {};
  const cellKey = (row, column) => `${row}_${column}`;
  this.isCellAlive = (row, column) => !!isAlive[cellKey(row, column)];
  this.toggleCellState = (row, column) => {
    const key = cellKey(row, column);
    if (isAlive[key]) {
      delete isAlive[key];
    } else {
      isAlive[key] = true;
    }
    return this;
  };
  this.tick = () => {
    const numberOfNeighbours = {};
    for (const key in isAlive) {
      const [row, column] = key.split('_').map(p => parseInt(p, 10));
      numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
      [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].forEach(function(offset) {
        const neighbourKey = cellKey(row + offset[0], column + offset[1]);
        numberOfNeighbours[neighbourKey] = (numberOfNeighbours[neighbourKey] || 0) + 1;
      });
    }
    for (const key in numberOfNeighbours) {
      if (isAlive[key] && (numberOfNeighbours[key] < 2 || numberOfNeighbours[key] > 3) || !isAlive[key] && numberOfNeighbours[key] === 3) {
        const [row, column] = key.split('_').map(p => parseInt(p, 10));
        this.toggleCellState(row, column);
      }
    }
  };
};

export default GameOfLife;
