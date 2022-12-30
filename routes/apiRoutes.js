const router = require('express').Router();
const data = require('../db/db.json');
const { deleteNote, createNewNote } = require('../db/helper')
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    let data = notes;
    res.send(data);
});
router.get('/', (req, res) => {
    res.send('API HERE!');
});
router.post('/notes', (req, res) => {
    req.body.id = uuidv4
    const newNote = createNewNote(req.body, notes)
    res.json(newNote);
});
router.delete('/notes/:id', (req, res) => {
    const targetNote = req.params.id 
    deleteNote(targetNote, notes);
    res.redirect('');
});
//why is nothing staged to commit
module.exports = router;