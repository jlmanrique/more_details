var Chance = require('chance');
var chance = new Chance();

function User(){
}

User.random = function(id){
  return {
    id : id,
    first_name : chance.name(),
    last_name: chance.last(),
    more: '/user/'+id+'/more'
  };
}

User.random_detailed = function(id){
  return {
    id : id,
    first_name : chance.name(),
    last_name: chance.last(),
    age: chance.age({type: 'adult'}),
    address: chance.address(),
    phone: chance.phone(),
    ssn: chance.ssn(),
    country: chance.country({ full: true })
  }; 
}

module.exports = User;