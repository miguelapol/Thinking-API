const Reader = require("./../app/utils/Reader");
const path = require("path");
const students = Reader.ReadJsonFile(path.resolve(__dirname,"../test/data/studentest.json"));

// const file = fs.readFileSync(path.resolve(__dirname, '../'+ruta), 'utf8');
describe("Pruebas de unidad", function() {
    test("Read of students Reader", function() {
       
        expect(students).not.toBeUndefined();
        
    });
});