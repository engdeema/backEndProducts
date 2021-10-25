// call express
const express = require("express");

// express instance
const app = express();
// allows the app to access the body of req
app.use(express.json());
//import the data
const products = require("./products");
// bind our application to  this port
const PORT = 8000;
// app.listen(8000, () => {
//   console.log("The application is running on localhost:8000");
// });
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
// i am sendind data as a response ,, .json means as that format
app.get("/api/products", (req, res) => {
  res.json(products);
});

// app.post("/api/products", (req, res) => {
//   console.log("posting", req.body);

// if you wrote : res.json("is it reall!"); then check postman you will see it in the responce field
// });
// create an api that adds to my data
app.post("/api/products", (req, res) => {
  const newProduct = products.push(req.body);
  res.status(201).json(req.body);
  //   console.log("posting", req.body);
});
// i am putting a variable in the url called : rout param
app.delete("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find(
    (product) => product.id === +req.params.productId
  );
  res.json(foundProduct);
  res.status(204).end();
});
//   console.log("posting", req.body);
