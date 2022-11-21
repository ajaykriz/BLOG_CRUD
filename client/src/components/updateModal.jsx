import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBlog, getBlogs } from "../features/blog/blogSlice";
import axios from "axios";
function Modal({ blogId, setModal }) {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    title: "",
    text: "",
  });

  const { title, text } = data;
  const onChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const blogData = {
      id: blogId,
      title,
      text,
    };
    dispatch(updateBlog(blogData));
    dispatch(getBlogs());
    setModal(false);
  };
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/api/blogs/${blogId}`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className=" fixed top-0 right-0  left-0 z-50 p-4 w-full md:inset-0 h-modal md:h-full">
        <div className="relative mx-auto w-full z-10 max-w-md h-full md:h-auto">
          <div className="relative  bg-white rounded-lg shadow">
            <button
              onClick={() => setModal(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-black">
                ADD TO BLOG LIST
              </h3>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    TITLE
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={onChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-black">
                    TEXT
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    value={text}
                    onChange={onChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full mt-5 text-white bg-black  font-medium rounded-sm text-base px-5 py-2.5 text-center"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
