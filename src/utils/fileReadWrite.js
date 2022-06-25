const fs = require("fs");
const path = require("path");

const readDataFromFile = (fileName) => {
  const filePath = path.join(__dirname, `../../db/${fileName}.json`);

  const dataFromFile = fs.readFileSync(filePath, "utf8");

  return JSON.parse(dataFromFile);
};

const writeDataToFile = (fileName, data) => {
  const filePath = path.join(__dirname, `../../db/${fileName}.json`);

  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = {
  readDataFromFile,
  writeDataToFile,
};