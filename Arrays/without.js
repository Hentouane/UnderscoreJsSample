var _ = require('underscore');

var value = _.without(["Apple", "Banana", "Grapefruit","PineApple", "Orange", "Blood orange"],"Orange", "Blood orange");
console.log(value);