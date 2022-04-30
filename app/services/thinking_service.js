class Thinking{
    static getThinking(students){
        const studentsUser=students.map(student=>student.name);
        return studentsUser;

    }
    static getThinkingCertification(students){
        const studentsCertification=students.filter(student=>student.haveCertification===true);
        return studentsCertification;
    }
    static getThinkingCredits(students){
        const studentsCredits=students.filter(student=>student.credits>500);
        return studentsCredits;
    }
}
module.exports = Thinking;