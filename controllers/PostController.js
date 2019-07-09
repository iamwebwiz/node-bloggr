const Post = require("../database/models/Post");

const index = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts: posts });
};

module.exports = index;
