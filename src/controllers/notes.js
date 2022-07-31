//import dependencies and read/write functions

const { v4: uuidv4 } = require("uuid");
const { readDataFromFile, writeDataToFile } = require("../utils/fileReadWrite");

const getNotes = (req, res) => {
  //read all notes from data file
  const notes = readDataFromFile("db");

  // send all items as response
  return res.json(notes);
};

const createNote = (req, res) => {
  console.log(req.body);

  // get the payload from req body -from user
  const { title, text } = req.body;

  // create uuid
  const id = uuidv4();

  // create the note object with payload and id
  const newNote = {
    id,
    title,
    text,
  };

  // get all notes from file
  const getNotes = readDataFromFile("db");

  //insert new note into notes
  getNotes.push(newNote);

  // write all items to file
  writeDataToFile("db", getNotes);

  // send response
  return res.json({
    message: "Successfully created new note",
  });
};

const deleteNote = (req, res) => {
  //get id from req
  const { id } = req.params;

  // get all notes from file
  const notes = readDataFromFile("db");

  // remove notes from file
  const filteredNotes = notes.filter((note) => note.id !== id);

  // write to file
  writeDataToFile("db", filteredNotes);

  // send response
  return res.json({
    message: "Successfully deleted note",
  });
};

module.exports = { getNotes, createNote, deleteNote };
