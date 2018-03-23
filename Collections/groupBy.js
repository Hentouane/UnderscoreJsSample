var _ = require('underscore');

var listOfProducts = [
    {country : "Canada", fruit : "Apple", color : "red"},
    {country : "Canada", fruit : "Apple", color : "green"},
    {country : "USA", fruit : "Grape", color : "yellow"},
    {country : "USA", fruit : "Apple", color : "red"},
    {country : "USA", fruit : "Lemon", color : "yellow"},
    {country : "USA", fruit : "Lemon", color : "green"},
    {country : "France", fruit : "Grape", color : "black"},
    {country : "France", fruit : "Grape", color : "green"},
    {country : "France", fruit : "Apple", color : "yellow"}
];

var value = _.groupBy(listOfProducts, function(item){ return item.country});
console.log(value);