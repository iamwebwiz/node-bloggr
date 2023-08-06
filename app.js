import express from "express";
import edge from "express-edge";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import router from "./router.js";
import newPostValidator from "./middlewares/StorePost.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.APP_PORT || 3000;

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to database: ${process.env.MONGODB_URI}`));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
