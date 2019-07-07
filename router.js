const router = require("express").Router();
const Post = require("./database/models/Post");

router.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts: posts });
});

router.get("/contact", (req, res) => res.render("contact"));

module.exports = router;
