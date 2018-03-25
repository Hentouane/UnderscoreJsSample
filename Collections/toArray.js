var _ = require('underscore');

var value = (function(){ return _.toArray(arguments); })("Apple", "Banana", "Grapefruit","PineApple");
console.log(value);