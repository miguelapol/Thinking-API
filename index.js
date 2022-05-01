const Reader = require("./app/utils/Reader");
const students = Reader.ReadJsonFile("students.json");
const thinking= require("./app/services/thinking_service");
console.log(thinking.getThinkingCertification(students));
