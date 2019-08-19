import express from "express";
import edge from "express-edge";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import router from "./router";
import validationMiddleware from "./middlewares/StorePost";
const app = express();
const port = process.env.PORT || 3000;

// mongoose.connect("mongodb://localhost/bloggie", {
//   useNewUrlParser: true
// });

app.use(edge);

app.use(fileUpload());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.resolve(`${__dirname}/views`));

app.use(express.static("public"));

app.use("/posts/new", validationMiddleware);

app.use("/", router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
