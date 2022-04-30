const Reader = require("../app/utils/Reader");


describe("Pruebas de unidad", function() {
    test("Read of students", function() {
        const students = Reader.ReadJsonFile("../test/data/studentest.json");
        expect(students).not.toBeUndefined();
        
    });
});