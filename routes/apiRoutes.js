const router = require('express').Router();
const data = require('../db/db.json');
const { deleteNote, createNewNote } = require('../db/helper')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

router.get("/notes", function(req, res) {
    fs.readFile(__dirname + "/../db/db.json", (err, data) => {
        if (err) throw err
        let data = JSON.parse(data);
        return res.json(data);

    })
});


router.post('/notes', (req, res) => {
    req.body.id = uuidv4
    data.push(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(data), function () {
    res.json(data);
});
router.delete('/notes/:id', (req, res) => {
    const targetNote = req.params.id 
    deleteNote(targetNote, notes);
    res.redirect('');
});
//why is nothing staged to commit
module.exports = router;