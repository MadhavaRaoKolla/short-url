const express = require("express");
const urlRoute = require("./routes/url");
const { connectTOMongoDB } = require("./connect");
const app = express();
const PORT = 5000;

connectTOMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("Failed to connect...", err));

app.use(express.json());
app.use("/url", urlRoute);
//stopped at 17:19 done for the day....
app.listen(PORT, () => console.log(`server is running on port ${PORT}...`));
