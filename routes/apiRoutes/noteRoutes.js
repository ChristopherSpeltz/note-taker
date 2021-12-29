const router = require('express').Router();
const notes = require("../../db/db.json");
const { createNote } = require("../../lib/notes");



router.get("/", (req, res) => {
    let results = notes;
    res.json(results);
});

router.post("/", (req, res) => {

    const note = createNote(req.body, notes);
    res.json(note);
    console.log(req.body);
});


module.exports  = router;
