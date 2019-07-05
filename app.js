const express = require("express");
const edge = require("express-edge");
const app = express();
const port = process.env.PORT || 3000;

app.use(edge);

app.set("views", `${__dirname}/views`);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
