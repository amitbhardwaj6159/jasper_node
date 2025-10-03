const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const orderRoutes = require('./routes/orders');
const connectDB = require('./db');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
