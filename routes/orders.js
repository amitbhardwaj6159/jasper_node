const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Item = require('../models/Item');
const mongoose = require('mongoose');

router.post('/', async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { customerName, items } = req.body;

    // Step 1: Create order
    const order = new Order({ customerName });
    await order.save({ session });

    // We can test atomicity here
    // throw new Error("Simulated failure after saving order");

    // Step 2: Create items
    const itemDocs = items.map(item => ({
      orderId: order._id,
      ...item
    }));

    await Item.insertMany(itemDocs, { session });

    // Step 3: Commit transaction
    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({ message: 'Order created successfully', orderId: order._id });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error(error);
    return res.status(500).json({ error: 'Failed to create order' });
  }
});

module.exports = router;
