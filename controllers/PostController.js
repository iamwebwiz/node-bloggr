const Post = require("../database/models/Post");

export const index = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts: posts });
};

export const storePost = async (req, res) => {
  const post = await Post.save({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content
  });
  if (!post) return "Something bad happened";
  else console.log(post);
  res.redirect("/posts");
};

export const readPost = async (req, res) => {
  const post = await Post.find({ _id: req.params.id });
  res.render("post", { post: post });
};
