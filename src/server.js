//import express and other dependencies
const express = require("express");
const path = require("path");
const routes = require("./routes");

//declare the PORT
const PORT = process.env.PORT || 4000;

//create express app instance
const app = express();

//add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//register controller function
 app.get("/", (req, res)  => {
res.send ("hello");
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

 })

//listens for requests by connecting to server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
