import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs/";

const createBlog = async (blogData) => {
  const response = await axios.post(API_URL, blogData);

  return response.data;
};
const getBlogs = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const updateBlog = async (data) => {
  const response = await axios.put(API_URL + data.id, data);
  return response.data;
};
const deleteBlog = async (blogId) => {
  const response = await axios.delete(API_URL + blogId);

  return response.data;
};

const blogService = {
  createBlog,
  getBlogs,
  deleteBlog,
  updateBlog,
};

export default blogService;
