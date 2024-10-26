const fs = require("fs");

const readStream = fs.createReadStream("./docs/stream/read.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./docs/stream/write.text", {});

// // event listener
// readStream.on("data", (chunk) => {
//   console.log("-------- NEW CHUNK --------");
//   console.log(chunk);
//   // console.log(chunk.toString());
//   // writeStream.write("-------- NEW CHUNK --------");
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);
