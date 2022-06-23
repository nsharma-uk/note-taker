//import express
const { Router } = require("express");

//import controller for notes.js

//call a function to use the router
const router = Router();

//register the router to GET, POST, DELETE
router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNote);

//export the router
module.exports = router;

