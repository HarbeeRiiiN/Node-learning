const express = require("express");
const app = express();

// register view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.render("404");
});

app.listen(3000);
