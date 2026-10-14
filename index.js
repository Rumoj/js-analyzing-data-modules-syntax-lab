//setup: load datejs outside the function
require('datejs');

//argument collects any number of array in an array of arrays
function combineUsers(...args) {
  //initialize return object
  const combinedObject = {
    users: [],

  };

  //loop through args to isolate any arrays
  for (const userArray of args) {
    //spread operator to merge into combinedObject.users
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  //add date in M/d/yyyy format using datejs
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

//return the object
return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};