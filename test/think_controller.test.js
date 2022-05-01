const ThinkingController=require("../app/controller/thinking_controller");

describe("Pruebas de unidad", function() {
    test("Thinking user students controller", function() {
        //se hicieron cambios para que devuelva cualquier valor
        expect(ThinkingController.userThinking()).not.toBeUndefined();
    });
    test("Thinking certification students controller", function() {
        
        expect(ThinkingController.certificationThinking()).not.toBeUndefined();
    });
    test("Thinking credits students controller", function() {
       
        expect(ThinkingController.creditsThinking()).not.toBeUndefined();
    });
    

});