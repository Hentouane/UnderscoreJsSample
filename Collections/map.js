var _ = require('underscore');


var value = _.map([10, 20, 30], function(element) {
    return element * 10;
});

console.log(value);

value = _.map({one: 10, two : 20, three : 30},  function(element, key) {
    return element * 5;
});

console.log(value);
