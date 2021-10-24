// call express
const express = require("express");
const app = express();
//import the data
const backEndProducts = require("./data");
// bind our application to a sercer
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

app.get("/api/backEndProducts", (req, res) => {
  res.json(backEndProducts);
});
