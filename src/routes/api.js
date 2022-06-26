//import express
const { Router } = require("express");

//import notes.js
const notes = require("./notes");

//call a function to use the router
const router = Router();

//register the router

router.use("/notes", notes);

module.exports = router;
