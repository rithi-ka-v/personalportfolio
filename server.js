const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());
const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);

/* TEST ROUTE */

app.get("/", (req, res) => {

  res.send("Portfolio Backend Running");

});

/* DATABASE CONNECTION */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("MongoDB Connected");

})

.catch((error) => {

  console.log(error);

});

/* PORT */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server Running On Port ${PORT}`);

});