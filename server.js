const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const leadsRoutes = require("./controllers");
const sequelize = require("./sequelize");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors({
    origin: "*",
  })
);

app.use("/api", leadsRoutes);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
app.get("/", async (req, res) => {
  res.send("API running success");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/client/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.get("/pushcategories", async (req, res) => {
  res.send("API running");
});
app.get("/createproduct", async (req, res) => {
  res.send("API running");
});
app.get("/findout", async (req, res) => {
  res.send("API running");
});
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});
