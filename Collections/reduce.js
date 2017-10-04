var _ = require('underscore');

var value = _.reduce(["Apple", "Banana", "Grapefruit"], function(memo, value, index) {
    
    if (index == 0)
        return `I love ${value}`;
    else
        return `${memo} and ${value}`;

},"");
console.log(value);