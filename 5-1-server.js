const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hi</h1>");
});

app.get("/path1", (req, res) => {
  res.sendFile("./views/path1.html", {
    root: __dirname,
  });
});

app.get("/redireted", (req, res) => {
  res.sendFile("./views/redirect.html", {
    root: __dirname,
  });
});
// redirect
app.get("/redirect", (req, res) => {
  res.redirect("/redireted");
});

// 404
app.use((req, res) => {
  res.sendFile("./views/404.html", {
    root: __dirname,
  });
});

let server = app.listen("3000", () => {
  console.log("Server is listening on port 3000...");
});
