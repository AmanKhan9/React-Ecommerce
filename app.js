const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected"));

app.use(userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
