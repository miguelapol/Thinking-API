
const fs = require('fs');
const path = require('path');
class Reader{
    static ReadJsonFile(ruta){
        const file = fs.readFileSync(path.resolve(__dirname, '../'+ruta), 'utf8');
        return JSON.parse(file);
    }
}
module.exports = Reader;