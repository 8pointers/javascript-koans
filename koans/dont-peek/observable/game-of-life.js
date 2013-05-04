/*global jQuery, SAMURAIPRINCIPLE*/
(function () {
	'use strict';
	var oldGameOfLife = SAMURAIPRINCIPLE.GameOfLife;
	SAMURAIPRINCIPLE.GameOfLife = function () {
		var self = this, oldtoggleCellState;
		oldGameOfLife.call(this);
		SAMURAIPRINCIPLE.eventDispatcher(this);
		oldtoggleCellState = this.toggleCellState;
		this.toggleCellState = function (row, column) {
			oldtoggleCellState(row, column);
			self.dispatchEvent('cellStateChanged', row, column, self.isCellAlive(row, column));
		};
	};
}());
jQuery.fn.gameOfLifeWidget = function (gameOfLife, rows, columns) {
	'use strict';
	return this.each(function () {
		var self = jQuery(this);
		self.find('.tick').click(gameOfLife.tick);
		self.find('.grid td').each(function (index) {
			jQuery(this).click(gameOfLife.toggleCellState.bind(gameOfLife, Math.floor(index / columns), index % columns));
		});
		gameOfLife.addEventListener('cellStateChanged', function (row, column) {
			self.find('tr:nth-child(' + (row + 1) + ') td:nth-child(' + (column + 1) + ')').toggleClass('alive', 250);
		});
	});
};
