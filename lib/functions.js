const fs = require('fs');
const path = require('path');

// new notes

function createNewNote(body, notesArray) {
    const note = body;
    //push the arraynote
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        },
            null, 2)
    )
    return note;
}

module.exports = {createNewNote}