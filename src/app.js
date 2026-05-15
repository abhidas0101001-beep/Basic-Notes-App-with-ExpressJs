const express = require("express");
const app = express();
const notes = [];
app.use(express.json());

//Notes creation
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).send("Note created");
});

//Get all notes
app.get("/notes", (req, res) => {
  res.json({
    message: "Notes retrieved",
    notes: notes,
  });
  res.status(200);
});

//Delete a note
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).send("Note deleted");
});

//Update a note
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  if (notes[index] == null) {
    notes[index] = req.body;
  } else {
    notes[index].title = req.body.title;
    notes[index].description = req.body.description;
  }
  res.status(200).send("Note updated");
});

module.exports = app;
