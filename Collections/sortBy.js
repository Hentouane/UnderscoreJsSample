var _ = require('underscore');

var value = _.sortBy([{name: "stallone", firstname: "Sylvester"},
{name: "lundgren", firstname: "Dolf"}, 
{name: "Schwartzenegger", firstname: "Arnold"}, 
{name: "Statham", firstname: "Jason"}], 'firstname');
console.log(value);