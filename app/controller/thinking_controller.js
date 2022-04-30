const thinking= require("../services/thinking_service");
const Reader=require("../utils/Reader");
const students = Reader.ReadJsonFile(process.cwd()+"/test/data/studentest.json");

class ThinkingController{
    static userThinking(){
        return thinking.getThinking(students);
    }
    static certificationThinking(){
        return thinking.getThinkingCertification(students);
    }
    static creditsThinking(){
        return thinking.getThinkingCredits(students);
    }

}
module.exports = ThinkingController;