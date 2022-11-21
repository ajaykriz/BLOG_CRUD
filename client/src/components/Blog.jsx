import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs, deleteBlog } from "../features/blog/blogSlice";
import UpdateModal from "./updateModal";

function Blog() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blogs
  );
  const popup = (blog) => {
    setModal(true);
    setId(blog);
  };
  const handleDelete=(id)=>{
    if(window.confirm('Are you sure?')==true){
      dispatch(deleteBlog(id))
    }
  }
  useEffect(() => {
    dispatch(getBlogs());
  }, [modal]);

  return (
    <>
      <div className="flex  flex-col divide-y-2">
        <div className="h-10"></div>
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col justify-center py-4 items-center"
          >
            <h1 className="font-semibold text-2xl underline">{blog.title}</h1>
            <p className="pt-2">{blog.text}</p>
            <div className="flex justify-center mt-7">
              <div className="flex justify-end mr-1">
                <button
                  onClick={() =>handleDelete(blog._id)}
                  className="bg-yellow-400 rounded-sm p-1 px-1 font-medium"
                >
                  DELETE BLOG
                </button>
              </div>
              <div className="flex justify-start ml-1 ">
                <button
                  onClick={() => popup(blog._id)}
                  className="bg-cyan-500 rounded-sm p-1  text-white font-medium "
                >
                  UPDATE BLOG
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modal && <UpdateModal blogId={id} setModal={setModal} />}
    </>
  );
}

export default Blog;
