import jQuery from 'jquery';
import GameOfLife from './2-game-of-life';
import observable from './1-observable';

// prettier-ignore
describe('Game of Life', function() {
  let gameOfLife;
  let cellStateChangedListener;
  beforeEach(function() {
    gameOfLife = new GameOfLife();
    cellStateChangedListener = jest.fn().mockName('cellStateChangedListener');
    gameOfLife.addEventListener('cellStateChanged', cellStateChangedListener);
  });
  test('should dispatch cellStateChanged event when dead cell becomes alive', function() {
    gameOfLife.toggleCellState(2, 3);

    expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, true);
  });
  test('should dispatch cellStateChanged event when alive cell dies', function() {
    gameOfLife.toggleCellState(2, 3);

    gameOfLife.toggleCellState(2, 3);

    expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, false);
  });
});

// prettier-ignore
describe('Game of Life Widget', function() {
  let gameOfLife;
  let widget;
  beforeEach(function() {
    gameOfLife = observable({
      tick: jest.fn().mockName('tick'),
      toggleCellState: jest.fn().mockName('toggleCellState')
    });
    widget = jQuery('body')
      .append(`<div id='gameOfLifeWidget'>
          <table class='grid'>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          </table>
          <input type='button' class='tick' value='tick'></input>
        </div>`)
      .gameOfLifeWidget(gameOfLife, 10, 10);
  });
  test('should call tick method when tick button is clicked', function() {
    widget.find('.tick').click();

    expect(gameOfLife.tick).toHaveBeenCalled();
  });
  test('should call toggleCellState method when a table cell is clicked', function() {
    widget.find('.grid tr:nth-child(4) td:nth-child(5)').click();

    expect(gameOfLife.toggleCellState).toHaveBeenCalledWith(3, 4);
  });
  test('should add class alive when cell becomes alive', function() {
    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
  });
  test('should remove class alive when cell dies', function() {
    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, false);

    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
  });
  // test('should animate cell state changes if animation duration parameter is passed', function(done) {
  //   widget = jQuery('#gameOfLifeWidget')
  //     .clone()
  //     .appendTo('body')
  //     .gameOfLifeWidget(gameOfLife, 10, 10, 250);

  //   gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

  //   expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
  //   setTimeout(function() {
  //     expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
  //     done();
  //   }, 300);
  // });
});
