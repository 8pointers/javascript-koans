import jQuery from 'jquery';
import observable from './1-observable.js';

const GameOfLife = function () {
  const self = this;
  const isAlive = {};
  const cellKey = (row, column) => `${row}_${column}`;
  observable(this);
  this.isCellAlive = (row, column) => !!isAlive[cellKey(row, column)];
  this.toggleCellState = function (row, column) {
    const key = cellKey(row, column);
    if (isAlive[key]) {
      delete isAlive[key];
    } else {
      isAlive[key] = true;
    }
    this.dispatchEvent('cellStateChanged', row, column, this.isCellAlive(row, column));
    return this;
  };
  this.tick = function () {
    const numberOfNeighbours = {};
    for (const key in isAlive) {
      const [row, column] = key.split('_').map((p) => parseInt(p, 10));
      numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
      //prettier-ignore
      [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].forEach(function(offset) {
        const neighbourKey = cellKey(row + offset[0], column + offset[1]);
        numberOfNeighbours[neighbourKey] = (numberOfNeighbours[neighbourKey] || 0) + 1;
      });
    }
    for (const key in numberOfNeighbours) {
      if (
        (isAlive[key] && (numberOfNeighbours[key] < 2 || numberOfNeighbours[key] > 3)) ||
        (!isAlive[key] && numberOfNeighbours[key] === 3)
      ) {
        const [row, column] = key.split('_').map((p) => parseInt(p, 10));
        self.toggleCellState(row, column);
      }
    }
  };
};

jQuery.fn.gameOfLifeWidget = function (gameOfLife, rows, columns, animationDuration) {
  return this.each(function () {
    const widgetRoot = jQuery(this);
    widgetRoot.html(`
      <table class="grid">
        ${Array.from({ length: rows }, () => ['<tr>', ...Array.from({ length: columns }, () => '<td></td>'), '</tr>'])
          .flat()
          .join('')}
      </table>
      <input type="button" class="tick" value="tick" />
    `);
    widgetRoot.find('.tick').on('click', gameOfLife.tick);
    widgetRoot.find('.grid td').each(function (index) {
      jQuery(this).on('click', () => gameOfLife.toggleCellState(Math.floor(index / columns), index % columns));
    });
    gameOfLife.addEventListener('cellStateChanged', function (row, column, isCellAlive) {
      widgetRoot
        .find(`tr:nth-child(${row + 1}) td:nth-child(${column + 1})`)
        .toggleClass('alive', isCellAlive, animationDuration);
    });
  });
};

export default GameOfLife;
