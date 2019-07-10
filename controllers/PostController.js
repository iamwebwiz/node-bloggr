const Post = require("../database/models/Post");

const index = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts: posts });
};

const readPost = async (req, res) => {
  const post = await Post.find({ _id: req.params.id });
  res.render("post", { post: post });
};

module.exports = {
  index,
  readPost
};
