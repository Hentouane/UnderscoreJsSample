var _ = require('underscore');

var value = _.reduceRight(["Apple", "Banana", "Grapefruit"], function(memo, value, index, list) {
    
    if (index == list.length - 1)
        return `I love ${value}`;
    else
        return `${memo} and ${value}`;
},"");
console.log(value);