const fs = require('fs').promises;
const { mkdirp, writeJSON } = require('../lib/Fs');

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
        .then((contents) => expect(contents).toEqual('{"message":"hi"}'));
    });
  });
            
  afterAll(() => {
    fs.rmdir('./doberman', { recursive: true });
  });
});
