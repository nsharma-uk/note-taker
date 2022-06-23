//import express
const { Router } = require("express");

//import controller for views.js

//call a function to use the router
const router = Router();

//register the router to GET, POST, DELETE
router.get("/", renderHomePage);
router.get("/notes", renderNotesPage);

//export the router
module.exports = router;