const fs = require("fs");

const fileContent = fs.readFileSync("./messages.txt", "utf-8");
console.log(fileContent);

const newFileContent = `This is a new file content: ${fileContent}`;
fs.writeFileSync("data.txt", newFileContent, "utf-8");
console.log('Data is written to a file');