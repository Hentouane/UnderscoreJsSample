var _ = require('underscore');

var myFunction = function(element, index, list)
{
    console.log(`Element : ${element}, Index : ${index}, Element found by index : ${list[index]}`);
}
_.each(["Apple", "Banana", "Grapefruit"], myFunction);

_.each({one: "Apple", two : "Banana", three : "Grapefruit"}, myFunction);