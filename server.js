const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const contactRoutes = require("./Routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(errorHandler);


app.use("/api/contacts", contactRoutes);


const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database Connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log("err in db connection", err);
    process.exit(1);
  }
};

app.listen(port, () => {
  console.log(`server Started on ${port}`);
});

connectDb();