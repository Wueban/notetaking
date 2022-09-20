const router = require('express').Router();
const { notes } = require('../../db/db.json');
// create notes and delete 
const { createNewnote, deleteNote } = require('../../lib/functions')
//get
router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.json(savedNotes)
})

//post
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewnote(req.body, notes);
    res.json(note)
})

module.exports = router;