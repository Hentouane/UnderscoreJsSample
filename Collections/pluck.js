var _ = require('underscore');

var value = _.pluck([{name: "Doe", firstname: "John"},
{name: "Deere", firstname: "John"}, 
{name: "Doe", firstname: "Elias"}, 
{name: "Dep", firstname: "Johnny"}], 'firstname');
console.log(value);