//import express
const express = require("express");

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

 })

//listens for requests by connecting to server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
