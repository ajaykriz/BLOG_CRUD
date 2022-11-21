const Blog = require("../model/blogModel");
const asyncHandler = require("express-async-handler");

const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
};

const getBlog = async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id);
  res.status(200).json(blog);
};

const setBlog = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const blog = await Blog.create({
    title: req.body.title,
    text: req.body.text,
  });
  res.status(200).json(blog);
});

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error("Error not found");
  }
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBlog);
});

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }
  await blog.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBlogs,
  getBlog,
  setBlog,
  updateBlog,
  deleteBlog,
};
