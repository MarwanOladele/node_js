const fs = require("fs");

// Synchronous way
// const fileContent = fs.readFileSync("./messages.txt", "utf-8");
// console.log(fileContent);

// const newFileContent = `This is a new file content: ${fileContent}`;
// fs.writeFileSync("data.txt", newFileContent, "utf-8");
// console.log("Data is written to a file");

// Asynchronous way
// fs.readFile("./messages.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

fs.readFile("./messages.txt", "utf-8", (err, data) => {
  if (err) throw err;

  fs.writeFile("hello.txt", data, "utf-8", (err) => {
    if (err) throw err;
    console.log("data is returned");
  }); 
});

console.log('This is a FS core module example');