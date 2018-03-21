var _ = require('underscore');

var results = _.every([{name: "Doe", firstname: "John"},
          {name: "Deere", firstname: "John"}, 
          {name: "Doe", firstname: "John"}, 
          {name: "Dep", firstname: "John"}], function(item){ return item.firstname == "John"; });

console.log(results);