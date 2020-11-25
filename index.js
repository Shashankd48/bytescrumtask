const express = require("express");
const mongoose = require("mongoose");
const dburl = "mongodb://localhost:27017/bytescrum";
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Database Connectivity
mongoose
   .connect(dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
   })
   .then(() => console.log("DB CONNECTED SUCCESSFULLY"))
   .catch((error) => console.error("FAILED TO CONNECT DB"));

// other middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const home = require("./routes/home");

app.use("/bytescrum", home);

app.listen(PORT, () => console.log("Server is running..."));
