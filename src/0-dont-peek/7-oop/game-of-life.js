const cellKey = (row, column) => `${row}_${column}`;

const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);

export default class GameOfLife {
  constructor() {
    this.state = {};
  }

  isCellAlive(row, column) {
    return !!this.state[cellKey(row, column)];
  }

  toggleCellState(row, column) {
    const key = cellKey(row, column);
    const { [key]: isAlive, ...result } = this.state;
    this.state = isAlive ? result : { [key]: true, ...result };
    return this;
  }

  tick() {
    const { state } = this;
    const neighbours = Object.keys(state)
      .map(k => k.split('_').map(p => parseInt(p, 10)))
      .map(([r, c]) => deltas.map(([dr, dc, dn]) => [r + dr, c + dc, dn]))
      .reduce((result, current) => [...result, ...current], [])
      .map(([row, column, dn]) => [cellKey(row, column), dn])
      .reduce((result, [k, dn]) => ({ ...result, [k]: (result[k] || 0) + dn }), {});
    this.state = Object.keys(neighbours)
      .filter(k => (state[k] && neighbours[k] === 2) || neighbours[k] === 3)
      .reduce((result, key) => ({ ...result, [key]: true }), {});
  }
}
