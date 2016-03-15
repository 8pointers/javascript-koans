/*Solution 1*/
var colorLookup = (function () {
  var lookupMap = {
    'red': 0xFF0000,
    'green': 0x00FF00,
    'blue': 0x0000FF
  };
  return function (colorString) {
    return lookupMap[colorString];
  };
}());
/*Solution 2*/
(function () {
  var lookupMap = {
    'red': 0xFF0000,
    'green': 0x00FF00,
    'blue': 0x0000FF
  };
  window.colorLookup = function (colorString) {
    return lookupMap[colorString];
  };
}());
/*Solution 3 (not very nice)*/
(function () {
  var lookupMap = {
    'red': 0xFF0000,
    'green': 0x00FF00,
    'blue': 0x0000FF
  };
  colorLookup = function (colorString) {
    return lookupMap[colorString];
  };
}());
