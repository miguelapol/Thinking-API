const Reader = require("../app/utils/Reader");
const path = require('path');
// const file = fs.readFileSync(path.resolve(__dirname, '../'+ruta), 'utf8');
describe("Pruebas de unidad", function() {
    test("Read of students", function() {
        const students = Reader.ReadJsonFile(path.resolve(__dirname,"../test/data/studentest.json"));
        expect(students).not.toBeUndefined();
        
    });
});