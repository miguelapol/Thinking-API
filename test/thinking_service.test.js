const Reader = require("./../app/utils/Reader");
const path = require('path');
const students = Reader.ReadJsonFile(path.resolve(__dirname,"../test/data/studentest.json"));
const thinking= require('../app/services/thinking_service');

describe("Pruebas de unidad", function() {
    test("Thinking user students", function() {
        out=['Warren','Lucinda'];
        expect(thinking.getThinking(students)).toEqual(out);
    })
    test("Thinking certification students", function() {
        out=require('./data/certification.json');
        expect(thinking.getThinkingCertification(students)).toEqual(out);
    })
    test("Thinking credits students", function() {
        out=require('./data/credits.json');
        expect(thinking.getThinkingCredits(students)).toEqual(out);
    })

});