const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const dotenv = require("dotenv");
const { result } = require("lodash");

// express app
dotenv.config();
const app = express();
app.listen(3000);
// connect to mongodb & listen for requests
const dbURI = process.env.DATABASE_URL;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("MongoDB is connected...");
  })
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "this is a new blog 2",
    body: "body of the new blog 2",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/single-blog", (req, res) => {
  Blog.findById("671df6bb02f9e65cc6a25320")
    .then((result) => res.send(result))
    .catch((err) => {
      console.log("cannot find");
    });
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.get("/blogs", (req, res) => {
  let blogs;
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      blogs = result;
      res.render("index", { title: "All Blogs", blogs: blogs });
    })
    .catch((err) => console.log(err));
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
