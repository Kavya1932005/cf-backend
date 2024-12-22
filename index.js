const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT.MONGODB_URL;

// MongoDB connection URL
//const MONGODB_URL=" ";

// Middleware setup
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('Connection error:', err));

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Customer Feedback System API!');
});

// Routes
app.use('/api/reviews', reviewRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
