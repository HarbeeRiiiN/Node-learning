// 1. the response object
// 2. returning HTML pages
// 3. basic routing
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content-type
  res.setHeader("Content-Type", "text/html");
  // res.write("<h1>text/plain</h1>");
  // res.end();

  // send an html file
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});



server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000...");
});
