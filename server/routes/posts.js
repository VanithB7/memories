import express from "express";
import {
  getAllPosts,
  createPosts,
  updatePosts,
  deletePosts,
} from "../controllers/posts.js";
const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/posts", createPosts);
router.patch("/posts/:id", updatePosts);
router.delete("/posts", deletePosts);

export default router;
