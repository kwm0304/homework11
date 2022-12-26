const {v4 : uuidv4} = require('uuid')
const fs = require('fs');
const { noteArray } = require('./db.json')

function read() {
    return readFileAsync(path.join(__dirname, "db.json"), "utf8");
} 

function write(note) {
    fs.writeFileSync('db/db.json', JSON.stringify(note))
} 

function createNewNote(note, noteArray) {
    const { title, text, id } = note;
    id = uuidv4()
    noteArray.push(note)
    if (!title || !text) {
        throw new Error("Note 'title' and 'text' cannot be blank");
    } else fs.writeFileSync({ notes: noteArray}, null, 2)
    return savedNote
}
    
  module.exports = { read, write, createNewNote }