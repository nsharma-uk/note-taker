const { v4: uuidv4 } = require('uuid');


const getNotes = (req, res) => {
  
  
  //read from file
  

};

const createNote = (req, res) => {
  res.send("createNote");
};

const deleteNote = (req, res) => {
  res.send("deleteNote");
};

module.exports = {getNotes,
createNote,
deleteNote};