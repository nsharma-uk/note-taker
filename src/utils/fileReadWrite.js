const fs = require("fs");
const path = require("path");

const readDataFromFile = (fileName) => {
  
  try { 
  //get path to the file
   const filePath = path.join(__dirname, "../../db/db.json");
  
   //read from the data file
  const dataFromFile = fs.readFileSync(filePath, "utf8");

  //send data as response
  return JSON.parse(dataFromFile);

} catch (error) {

console.log (`[ERROR: ${error.message}]`);

return res.status(500).json({
  success: false,
  error: "Failed to read file",
});
}
};



//get path to file
const writeDataToFile = (fileName, data) => {
  try {
    
    const filePath = path.join(__dirname, "../../db/db.json");

  //write data into the file
  fs.writeFileSync(filePath, JSON.stringify(data));

} catch (error) {
  console.log(`[ERROR: ${error.message}]`);

    return res.status(500).json({
      success: false,
      error: "Failed to write to database",
    });
  }
};

module.exports = {
  readDataFromFile,
  writeDataToFile,
};
