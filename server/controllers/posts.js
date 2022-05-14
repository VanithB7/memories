import Post from "../models/Post.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
export const createPosts = async (req, res) => {
  const postData = req.body;
  const posts = new Post(postData);
  try {
    await posts.save();
    res.status(201).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    res.status(409).json({
      success: false,
      error: error.message,
    });
  }
};
export const updatePosts = async (req, res) => {
  try {
  } catch (error) {}
};
export const deletePosts = async (req, res) => {
  try {
  } catch (error) {}
};
