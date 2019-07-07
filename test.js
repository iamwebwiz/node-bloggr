const mongoose = require("mongoose");
const Post = require("./database/models/Post");

/**
 * Connect to database
 */
mongoose.connect("mongodb://localhost/bloggie", {
  useNewUrlParser: true
});

/**
 * Create a new post
 */
let data = {
  title: "Second post title",
  description: "Second post description",
  content: "Second post content"
};

Post.create(data, (error, post) => {
  if (error) throw error;
  else console.log(post);
});

/**
 * Find a post
 */
Post.findById("5d216651c1001023e44abff8", (error, post) =>
  console.log(error, post)
);

/**
 * Update a post
 */
let updateData = {
  title: "First post title",
  description: "First post description",
  content: "First post content"
};

Post.findByIdAndUpdate("5d216497590f8d078c46b15f", updateData, (err, post) => {
  if (err) throw err;
  else console.log(post);
});

/**
 * Delete a post
 */
Post.findByIdAndDelete("5d216651c1001023e44abff8", (err, post) => {
  if (err) throw err;
  else console.log(post.title, "has been deleted.");
  process.exit();
});
