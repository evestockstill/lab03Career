const fs = require('fs').promises;
const { mkdirp, writeJSON, readJSON, readDirectoryJSON } = require('../lib/Fs');

describe('File System', ()=> {
  beforeAll(() => {
    mkdirp('./doberman');
  });

  describe('writeJSON', () => {
    it(' it writes an object JSON', () => {
      return writeJSON('./doberman/puppy', { message: 'hi' })
        .then(() => {
          return fs.readFile('./doberman/puppy', 'utf8');
        })
        .then((contents) => expect(JSON.parse(contents)).toEqual({ message: 'hi' }));
    });
  });
  describe('readJSON', () => {
    it('reads JSON object', () => {
      return readJSON('./doberman/puppy')
        .then((contents) => expect(contents).toEqual({ message:'hi' }));
    });  
  }); 
  describe('readDirectoryJSON', () => {
    it('reads all files', () => {
      return readDirectoryJSON('./doberman')
        .then((contents) => expect(contents)
          .toEqual(['puppy']));
      
     
    });
  });

  afterAll(() => {
    fs.rmdir('./doberman', { recursive: true });
  });
});
