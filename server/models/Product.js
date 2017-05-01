const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: 'string',
  category: 'string',
  description: 'string'
});

module.exports = mongoose.model('Product', ProductSchema);