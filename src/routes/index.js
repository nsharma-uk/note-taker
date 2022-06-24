//import express
const { Router } = require("express");

//import api.js & views.js
const api = require("./api");
const views = require("./views");

//call a function to use the router
const router = Router();

//register the router
router.use("/api", api);
router.use("/", views);

//export the router
module.exports = router;