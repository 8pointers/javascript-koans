/*global jQuery*/
var SAMURAIPRINCIPLE = SAMURAIPRINCIPLE || {};
SAMURAIPRINCIPLE.GameOfLife = function () {
  var self = this,
    isAlive = {},
    cellKey = function (row, column) {
      return row + '_' + column;
    };
  SAMURAIPRINCIPLE.eventDispatcher(this);
  this.isCellAlive = function (row, column) {
    return isAlive[cellKey(row, column)] || false;
  };
  this.toggleCellState = function (row, column) {
    var key = cellKey(row, column);
    if (isAlive[key]) {
      delete isAlive[key];
    } else {
      isAlive[key] = true;
    }
    this.dispatchEvent(...);
    return this;
  };
  this.tick = function () {
    var key, parts, row, column, numberOfNeighbours = {}, neighbourKey;
    for (key in isAlive) {
      parts = key.split('_');
      row = parseInt(parts[0], 10);
      column = parseInt(parts[1], 10);
      numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
      [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].forEach(function (offset) {
        neighbourKey = cellKey(row + offset[0], column + offset[1]);
        numberOfNeighbours[neighbourKey] = (numberOfNeighbours[neighbourKey] || 0) + 1;
      });
    }
    for (key in numberOfNeighbours) {
      if (isAlive[key] && (numberOfNeighbours[key] < 2 || numberOfNeighbours[key] > 3) || !isAlive[key] && numberOfNeighbours[key] === 3) {
        parts = key.split('_');
        row = parseInt(parts[0], 10);
        column = parseInt(parts[1], 10);
        self.toggleCellState(row, column);
      }
    }
  };
};
jQuery.fn.gameOfLifeWidget = function (gameOfLife, rows, columns, animationDuration) {
  return this.each(function () {
    var self = jQuery(this);
    self.find('.tick').click(gameOfLife.tick);
    self.find('.grid td').each(function (index) {
      jQuery(this).click(gameOfLife.toggleCellState.bind(gameOfLife, Math.floor(index / columns), index % columns));
    });
    gameOfLife.addEventListener('cellStateChanged', function (row, column) {
      self.find(`tr:nth-child(${row + 1}) td:nth-child(${column + 1})`).toggleClass('alive', animationDuration);
    });
  });
};
