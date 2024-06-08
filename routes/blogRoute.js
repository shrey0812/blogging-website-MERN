const express = require("express");
const {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getBLogByIdController,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");

//router object
const router = express.Router();

//routes

//Get all Blogs
router.get("/all-blog", getAllBlogController);

//Post || Create Blogs
router.post("/create-blog", createBlogController);

//Put || update blog
router.put("/update-blog/:id", updateBlogController);

//Get ||Single Blog Details
router.get("/get-blog/:id", getBLogByIdController);

//Delete || delete blog
router.delete("/delete-blog/:id", deleteBlogController);

//Get ||user blog
router.get("/user-blog/:id", userBlogController);

module.exports = router;
