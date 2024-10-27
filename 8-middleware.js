// 1. what is middleware?
// 2. using next( )
// 3. 3rd party middleware
// 4. static files

const express = require("express");
const morgan = require("morgan");

// express app
const app = express();

// listen for requests
app.listen(3000);

app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log("new request made:");
//   console.log("host: ", req.hostname);
//   console.log("path:", req.path);
//   console.log("method:", req.method);
//   next();
// });

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Blog1",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Blog2",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Blog3",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
