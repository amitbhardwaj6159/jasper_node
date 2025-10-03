const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  productName: String,
  quantity: Number,
  price: Number
});

module.exports = mongoose.model('Item', itemSchema);
