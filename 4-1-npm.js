// 1. 3rd party packages
// 2. package.json
// 3. dependencies

const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log("hello");
  });

  greet();
  greet();

  // set header content-type
  res.setHeader("Content-Type", "text/html");

  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/path1":
      path += req.url + ".html";
      res.statusCode = 200;
      break;
    case "/path2":
      path += req.url + ".html";
      res.statusCode = 200;
      break;
    case "/redirect":
      path += req.url + ".html";
      res.statusCode = 200;
      break;
    case "/toRedirect":
      res.statusCode = 301;
      res.setHeader("Location", "/redirect");
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }
  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
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
