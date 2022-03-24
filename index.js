const fs = require('fs');

if (!fs.existsSync('filename')) {
    fs.mkdirSync("./NewFolder")
}
function add(file) {
    fs.appendFile("./NewFolder/text.txt", file, (err) => {
        if (err) throw err; {
            console.log('the data was appended to file');
        }
    })
}
add("hello")