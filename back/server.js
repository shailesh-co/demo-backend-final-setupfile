require('dotenv').config(); // ✅ Load env variables FIRST

const express = require('express');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db'); // ✅ Uses env, so it must be below dotenv

connectDB(); // ✅ Actually call the function

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
