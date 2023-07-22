const Post = require("../database/models/Post");

const index = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts: posts });
};

const storePost = async (req, res) => {
  const post = await Post.save({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
  });
  if (!post) return "Something bad happened";
  else console.log(post);
  res.redirect("/posts");
};

const readPost = async (req, res) => {
  const post = await Post.find({ _id: req.params.id });
  res.render("post", { post: post });
};

module.exports = { index, storePost, readPost };
