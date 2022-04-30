const Reader = require("./app/utils/Reader");
const students = Reader.ReadJsonFile("./test/data/studentest.json");
console.log(students);