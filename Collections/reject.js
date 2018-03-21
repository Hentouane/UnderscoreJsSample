var _ = require('underscore');

var results = _.reject([{name: "Doe", firstname: "John"},
          {name: "Deere", firstname: "John"}, 
          {name: "Doe", firstname: "Elias"}, 
          {name: "Dep", firstname: "Johnny"}], function(item){ return item.name == "Doe"; });

console.log(results);

