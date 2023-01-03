const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const platesRoute = require("./routes/plates");
const cors = require("cors");


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/plates", platesRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
