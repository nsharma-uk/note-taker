//import express
const { Router } = require("express");

//import api.js & views.js
const notes = require("./api");
const notes = require("./views");

//call a function to use the router
const router = Router();

//register the router
router.use("/notes", notes);

//export the router
module.exports = router;