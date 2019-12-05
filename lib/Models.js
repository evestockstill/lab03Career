const uuid = require('uuid/v4');
const randomId = uuid();
const asyncHandler = require('../async/async');


const dogSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
  },
  weight: {
    type: String
  }
});



const Dog = new module('Dog', dogSchema);

exports.createDog = Dog 
    .create.writeJson(({ name: 'spot', age: 5, weight: '20 lbs' }))
  .then(createdDog => {
  
     
    });
  });
