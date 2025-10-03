const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
