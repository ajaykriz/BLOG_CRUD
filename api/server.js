const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const blogRoute = require("./routes/blogRoute");
const cors = require("cors");
const { errorHandler } = require("./middleware/error");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/blogs", blogRoute);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
