import express from "express";
import PostController from "./controllers/PostController.js";
import FrontendController from "./controllers/FrontendController.js";
const router = express.Router();

router.get("/", PostController.index);

router.get("/contact", FrontendController.contact);

router.post("/posts/new", PostController.storePost);

export default router;
