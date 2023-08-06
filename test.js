import mongoose from "mongoose";
import faker from "faker";
import Post from "./database/models/Post.js";

/**
 * Fix deprecation warnings
 */
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

/**
 * Connect to database
 */
mongoose.connect("mongodb://localhost/bloggie");

/**
 * Fetch all posts
 */
Post.find({}, (err, posts) => {
  if (err) throw err;
  else console.log(posts);
  process.exit();
});

/**
 * Create a new post
 */
let data = {
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  content: faker.lorem.sentences(),
};

Post.create(data, (error, post) => {
  if (error) throw error;
  else console.log(post);
  process.exit();
});

/**
 * Find a post
 */
Post.findById("5d5f5fff1c01f99a756ffab7", (error, post) => {
  if (error) throw error;
  else console.log(post);
  process.exit();
});

/**
 * Update a post
 */
Post.findByIdAndUpdate("5d5f5fff1c01f99a756ffab7", data, (err, post) => {
  if (err) throw err;
  else console.log(post);
  process.exit();
});

/**
 * Delete a post
 */
Post.findByIdAndDelete("5d5f5fff1c01f99a756ffab7", (err, post) => {
  if (err) throw err;
  else console.log(post.title, "has been deleted.");
  process.exit();
});
