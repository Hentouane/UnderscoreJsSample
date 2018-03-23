var _ = require('underscore');

var listOfProducts = [
    {country : "Canada", fruit : "Apple", color : "red"},
    {country : "USA", fruit : "Grape", color : "yellow"},
    {country : "France", fruit : "Grape", color : "black"},
];

var value = _.indexBy(listOfProducts, function(item){ return item.country});
console.log(value);