const fs = require("fs");
const path = require("path");
const notes = require('../db/db.json');


function createNote(note) {
    note.id = Math.floor(Math.random() *10000000)
    notes.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes)
    );
    return note;
};



module.exports = {
    createNote,
  };