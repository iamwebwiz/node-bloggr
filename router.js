const router = require("express").Router();
const PostController = require("./controllers/PostController");
const FrontendController = require("./controllers/FrontendController");

router.get("/", PostController);

router.get("/contact", FrontendController.contact);

module.exports = router;
