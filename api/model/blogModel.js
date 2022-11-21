const mongoose = require("mongoose");

const Blogschema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a name"],
    },
    text: {
      type: String,
      required: [true, "Please add a name"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Blog", Blogschema);
