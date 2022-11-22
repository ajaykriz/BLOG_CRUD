const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect('mongodb://127.0.0.1:27017/Blog', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("db not connected");
  });
