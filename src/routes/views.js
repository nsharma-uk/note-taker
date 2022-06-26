//import express
const { Router } = require("express");

//import controller for index.js and notes.js{
const { renderHomePage, renderNotesPage } = require("../controllers/views");

//call a function to use the router
const router = Router();

//register the router to GET requests from index.js and notes.js
router.get("/", renderHomePage);
router.get("/notes", renderNotesPage);

//export the router
module.exports = router;
