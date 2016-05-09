describe('partial', function () {
  it('1 - should pre-apply specified parameter(s)', function () {
    var division = function (first, second) {
      return first / second;
    }, inverse = division.partial(1, undefined);
    expect(inverse(1)).toBe(1);
    expect(inverse(2)).toBe(1 / 2);
    expect(inverse(100)).toBe(1 / 100);
  });
  it('2 - should not pre-apply undefined arguments', function () {
    var division = function (first, second) {
      return first / second;
    }, halve = division.partial(undefined, 2);
    expect(halve(2)).toBe(1);
    expect(halve(100)).toBe(50);
    expect(halve(1)).toBe(1 / 2);
  });
  it('3 - has no tests, just an example', function () {
    //Say we have an object (model) with the API like this:
    var chipSelector = {
      selectChip: function (denomination) {
        //this does something using denomination parameter
        alert(denomination);
      }
    };
    //And we are using it from within onClick event handler like this:
    jQuery('#chipSelector1').click(function () {
      chipSelector.selectChip(1);
    });
    jQuery('#chipSelector2').click(function () {
      chipSelector.selectChip(10);
    });
    jQuery('#chipSelector3').click(function () {
      chipSelector.selectChip(100);
    });
    //Try and simplify onClick handlers using partial
  })
});
