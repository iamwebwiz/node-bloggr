const router = require("express").Router();
const PostController = require("./controllers/PostController");
const FrontendController = require("./controllers/FrontendController");

router.get("/", PostController);

router.get("/contact", FrontendController.contact);

router.post("/posts/new", PostController.storePost);

module.exports = router;
