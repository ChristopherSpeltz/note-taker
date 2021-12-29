const router = require('express').Router();
// const { query } = require('express');
const notes = require("../../db/db.json");
const { createNote, queryNote } = require("../../lib/notes");
// const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
// const { animals } = require('../../data/animals');


router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

  if (!queryNote(req.body)) {
    res.status(400).send("The animal is not properly formatted.");
  } else {
    const note = createNote(req.body, notes);
    res.json(note);
  }
  console.log(req.body);
});

// router.get("/note", (req, res) => {
//     let results = note;
//     if (req.query) {
//       results = filterByQuery(req.query, results);
//     }
//     console.log(req.query);
//     res.json(results);
//   });

// router.get("/animals", (req, res) => {
//   let results = animals;
//   if (req.query) {
//     results = filterByQuery(req.query, results);
//   }
//   console.log(req.query);
//   res.json(results);
// });

// router.get("/animals/:id", (req, res) => {
//   const result = findById(req.params.id, animals);
//   if (result) {
//     res.json(result);
//   } else {
//     res.send(404);
//   }
// });

// router.post("/animals", (req, res) => {
//   // set id based on what the next index of the array will be
//   req.body.id = animals.length.toString();

//   if (!validateAnimal(req.body)) {
//     res.status(400).send("The animal is not properly formatted.");
//   } else {
//     const animal = createNewAnimal(req.body, animals);
//     res.json(animal);
//   }
//   console.log(req.body);
// });


module.exports  = router;
