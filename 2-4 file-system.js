const fs = require("fs");
// // 1. reading files
// // asynchronous, sometimes blocks the code
// fs.readFile("./docs/test.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
// // console.log(data) <Buffer 48 69 20 66 72 6f 6d 20 74 65 73 74 2e 74 78 74>

// console.log("readFile is asynchronous...");

// // 2. writing files
// fs.writeFile("./docs/write_test1.txt", "Hi from Node", () => {
//   console.log("write done");
// });

// // 3. directories
// if (!fs.existsSync("./docs/new_dir")) {
//   fs.mkdir("./docs/new_dir", (err) => {
//     if (err) console.log("* error - mkdir: ", err);
//   });
//   console.log("mkdir done");
// } else {
//   fs.rmdir("./docs/new_dir", (err) => {
//     if (err) console.log("* error - rmdir:", err);
//   });
//   console.log("rmdir done");
// }

// 4. deleting files
