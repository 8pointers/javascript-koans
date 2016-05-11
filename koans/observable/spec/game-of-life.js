describe('Game of Life', function () {
  var gameOfLife, cellStateChangedListener;
  beforeEach(function () {
    gameOfLife = new SAMURAIPRINCIPLE.GameOfLife();
    cellStateChangedListener = jasmine.createSpy('cellStateChangedListener');
    gameOfLife.addEventListener('cellStateChanged', cellStateChangedListener);
  });
  it('should dispatch cellStateChanged event when dead cell becomes alive', function () {
    gameOfLife.toggleCellState(2, 3);

    expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, true);
  });
  it('should dispatch cellStateChanged event when alive cell dies', function () {
    gameOfLife.toggleCellState(2, 3);

    gameOfLife.toggleCellState(2, 3);

    expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, false);
  });
});
describe('Game of Life Widget', function () {
  var gameOfLife, widget;
  beforeEach(function () {
    gameOfLife = SAMURAIPRINCIPLE.eventDispatcher(jasmine.createSpyObj('gameOfLife', ['tick', 'toggleCellState']));
    widget = jQuery('#gameOfLifeWidget').clone().appendTo('body').gameOfLifeWidget(gameOfLife, 10, 10);
  });
  it('should call toggleCellState method when a table cell is clicked', function () {
    widget.find('.grid tr:nth-child(4) td:nth-child(5)').click();

    expect(gameOfLife.toggleCellState).toHaveBeenCalledWith(3, 4, jasmine.any(Object));
  });
  it('should call tick method when tick button is clicked', function () {
    widget.find('.tick').click();

    expect(gameOfLife.tick).toHaveBeenCalled();
  });
  it('should add class alive when cell becomes alive', function () {
    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
  });
  it('should remove class alive when cell dies', function () {
    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, false);

    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
  });
  it('should animate cell state changes if animation duration parameter is passed', function (done) {
    gameOfLife = SAMURAIPRINCIPLE.eventDispatcher(jasmine.createSpyObj('gameOfLife', ['tick', 'toggleCellState']));
    widget = jQuery('#gameOfLifeWidget').clone().appendTo('body').gameOfLifeWidget(gameOfLife, 10, 10, 250);

    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
    setTimeout(function () {
      expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
      done();
    }, 300);
  });
});
describe('Game of Life Widget', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers();
  });
  afterEach(function () {
    clock.restore();
  });
  it('should animate cell state changes if animation duration parameter is passed (welcome sinon.js)', function () {
    var gameOfLife, widget;
    gameOfLife = SAMURAIPRINCIPLE.eventDispatcher(jasmine.createSpyObj('gameOfLife', ['tick', 'toggleCellState']));
    widget = jQuery('#gameOfLifeWidget').clone().appendTo('body').gameOfLifeWidget(gameOfLife, 10, 10, 250);

    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    clock.tick(200);
    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
    clock.tick(260);
    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
  });
});
