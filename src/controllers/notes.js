
const getNotes = (req, res) => {
  res.send("getNotes");
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