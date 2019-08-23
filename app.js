const express = require("express");
const edge = require("express-edge");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./router");
const newPostValidator = require("./middlewares/StorePost");
const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/bloggie", {
  useNewUrlParser: true
});

app.use(edge);

app.use(fileUpload());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));

app.use("/posts/new", newPostValidator);

app.use("/", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
