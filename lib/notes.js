const fs = require("fs");
const path = require("path");
const notes = require('../db/db.json');


function createNote(note) {
    notes.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes)
    );
    return note;
};

function queryNote() {
    
};


module.exports = {
    createNote,
    queryNote,
  };