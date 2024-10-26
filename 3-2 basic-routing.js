// 1. the response object
// 2. returning HTML pages
// 3. basic routing
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content-type
  res.setHeader("Content-Type", "text/html");

  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      break;
    case "/path1":
      path += req.url + ".html";
      break;
    case "/path2":
      path += req.url + ".html";
      break;
    default:
      path += "/404.html";
      break;
  }
  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  });
});

server.listen(3001, "localhost", () => {
  console.log("Listening for requests on port 3001...");
});
