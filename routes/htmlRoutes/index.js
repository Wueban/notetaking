const path = require('path');
const router = require('express').Router();
// get notes.html from public
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public//notes.html"))
});

// get index.html from public
router.get('*', (req, sen) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;