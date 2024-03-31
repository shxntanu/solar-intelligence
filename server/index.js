const express = require("express");
const queryDatabase = require("./database/connect");
const { addDataToDB, addSolarDataToDB } = require("./function");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

const regionRouter = require("./routes/region");
const globalRouter = require("./routes/global");
const evRegionRouter = require("./routes/evRegion");
const mlRouter = require("./routes/ml");
const productRecommendationRouter = require("./routes/productRecommendation");

// const { notFound } = require("./middleware/notFound");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Routes
app.use("/api/region", regionRouter);
app.use("/api/global", globalRouter);
app.use("/api/evRegion", evRegionRouter);
app.use("/api/ml", mlRouter);
app.use("/api/productRecommendation", productRecommendationRouter);

// app.use(notFound);

const start = async () => {
  try {
    await queryDatabase("SELECT 1"); // A simple query to test the connection
    console.log("Database connected successfully");

    // await addDataToDB();
    // await addSolarDataToDB();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
