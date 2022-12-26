const path = require('path');
const router = require('./apiRoutes');


//Homepage on open
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
//GET /notes should return notes.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
//GET * should return index.html (routes that don't exist)
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  module.exports = router;