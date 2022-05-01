const ThinkingController=require("../app/controller/thinking_controller");

describe("Pruebas de unidad", function() {
    test("Thinking user students controller", function() {
        out=["Warren","Lucinda"];
        expect(ThinkingController.userThinking()).toEqual(out);
    });
    test("Thinking certification students controller", function() {
        out=require("./data/certification.json");
        expect(ThinkingController.certificationThinking()).toEqual(out);
    });
    test("Thinking credits students controller", function() {
        out=require("./data/credits.json");
        expect(ThinkingController.creditsThinking()).toEqual(out);
    });
    

});