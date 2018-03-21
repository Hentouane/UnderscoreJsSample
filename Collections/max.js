var _ = require('underscore');

var results = _.max([{name: "Doe", firstname: "John", age: 40},
          {name: "Deere", firstname: "John", age: 74}, 
          {name: "Doe", firstname: "Jo", age: 45}, 
          {name: "Dep", firstname: "Johnnny", age: 54}], function(item){ return item.age; });

console.log(results);