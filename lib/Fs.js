const fs = require('fs').promises;

const mkdirp = (path) => {
  fs.mkdir((path), { recursive: true }, (err) => {
    if(err) throw err;
  });
};


const writeJSON = (path, object) => fs.writeFile(path, JSON.stringify(object), (err) => {
  if(err) {
    console.log('error');
  }
});


const readJSON = (path) => {
  return fs.readFile(path, 'utf8')
    .then(content => JSON.parse(content));
};

const readDirectoryJSON = (path) => fs.readdir(path, (err, files) => {
  files.forEach((file) => {
    return file;
  });
});
const updateJSON = (path, object) => readJSON(path)
  .then(oldData => ({ ...oldData, ...object }))
  .then(newData => writeJSON(path, newData));

// const deleteFile = (path) => path.delete(path => {
//   return deleteFile;
// });
  

module.exports = { mkdirp, writeJSON, readJSON, readDirectoryJSON, updateJSON }; 
