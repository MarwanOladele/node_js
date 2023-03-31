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

// fs.readFile("./messages.txt", "utf-8", (err, data) => {
//   if (err) throw err;

//   fs.writeFile("hello.txt", data, "utf-8", (err) => {
//     if (err) throw err;
//     console.log("data is returned");
//   });
// });

// console.log('This is a FS core module example');

// JSON Files
const employee = [
  {
    id: 1,
    first_name: "Jenn",
    last_name: "McLagain",
    email: "jmclagain0@facebook.com",
    gender: "Female",
    ip_address: "140.143.165.187",
  },
  {
    id: 2,
    first_name: "Harwilll",
    last_name: "Wellan",
    email: "hwellan1@fema.gov",
    gender: "Male",
    ip_address: "239.1.151.215",
  },
  {
    id: 3,
    first_name: "Joeann",
    last_name: "Mackley",
    email: "jmackley2@aboutads.info",
    gender: "Female",
    ip_address: "88.43.131.28",
  },
  {
    id: 4,
    first_name: "Natasha",
    last_name: "Permain",
    email: "npermain3@plala.or.jp",
    gender: "Female",
    ip_address: "59.47.146.120",
  },
  {
    id: 5,
    first_name: "Ailee",
    last_name: "Mahedy",
    email: "amahedy4@addtoany.com",
    gender: "Female",
    ip_address: "38.144.120.207",
  },
  {
    id: 6,
    first_name: "Somerset",
    last_name: "Lucian",
    email: "slucian5@hatena.ne.jp",
    gender: "Male",
    ip_address: "15.69.17.76",
  },
  {
    id: 7,
    first_name: "Katharina",
    last_name: "McDermid",
    email: "kmcdermid6@free.fr",
    gender: "Agender",
    ip_address: "97.150.221.184",
  },
  {
    id: 8,
    first_name: "Denis",
    last_name: "Weightman",
    email: "dweightman7@hostgator.com",
    gender: "Male",
    ip_address: "227.87.221.147",
  },
  {
    id: 9,
    first_name: "Ashia",
    last_name: "Sawrey",
    email: "asawrey8@economist.com",
    gender: "Female",
    ip_address: "117.254.231.16",
  },
  {
    id: 10,
    first_name: "Carlin",
    last_name: "Ricks",
    email: "cricks9@usda.gov",
    gender: "Female",
    ip_address: "49.41.83.225",
  },
];

fs.writeFile("employees.json", JSON.stringify(employee), "utf-8", (err) => {
  if (err) throw err;
  console.log("Data is returned to the file");
});

fs.readFile("./employees.json", "utf-8", (err, data) => {
  console.log(JSON.parse(data));
});
