const fs = require('fs').promises;
const uuid = require('uuid');

const mkdirp = (path) => {
  fs.mkdir((path), { recursive: true }, (err) => {
    if(err) throw err;
  });
};


const writeJSON = (path, object) => fs.writeFile(path, JSON.stringify(object), (err) => {
  if(err) throw err;
});


// const readJSON = (path, object) => {
//   fs.readFile(path, JSON.parse(object), (err) => {
   
//     if(err) {
   
//     }
//   });
// };



module.exports = { mkdirp, writeJSON };
