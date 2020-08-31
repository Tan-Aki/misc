const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose
  .connect(
    'mongodb+srv://tan:N5DBjoc1eKan3iyG@cluster0.4cluv.azure.mongodb.net/products_test?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to database !');
  })
  .catch(() => {
    console.log('Connection failed !');
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  console.log(typeof createdProduct.id);
  // .id is a virtual getter, it converts the _id object into a string
  // you can also get the object if you want to with createdProduct._id
  // it is done before the document is saved to the collection
  
  const result = await createdProduct.save();
  // save() returns a promise


  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.json(products);
  // if you want a real promise, you can use the exec()  ( find().exec())
  // you can also add .cursor() if you want a cursor, because the mongoose find method will return an array
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
