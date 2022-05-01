
const fs = require("fs");
const path = require("path");
class Reader{
    static ReadJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}
module.exports = Reader;