var _ = require('underscore');

var value = _.filter(["Apple", "Banana", "Grapefruit"], function(value) {
    return value.indexOf("p") >0;
});
console.log(value);