const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost/ecommerce');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello :)');
});

app.post('/new-product', (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err) => {
    if (err) res.send(err);
    res.send('Product successfully added.');
  });
});

app.get('/products', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) res.send(err);
    res.send(products);
  });
});

app.listen(5000, () => {
  console.log('server listening on port 5000.');
});