var _ = require('underscore');

var results = _.some([{name: "Doe", firstname: "John"},
          {name: "Deere", firstname: "John"}, 
          {name: "Doe", firstname: "Jo"}, 
          {name: "Dep", firstname: "Johnnny"}], function(item){ return item.firstname.length > 4; });

console.log(results);