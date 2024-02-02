const express = require('express');
const app = express();
const connectDB = require('./config/db'); // Import the database connection

// Connect to Database
connectDB();

app.use(express.json()); // Middleware for parsing application/json

// Routes
const userRoutes = require('./routes/userRoutes'); // Import the user routes

// Use Routes
app.use('/api/users', userRoutes); // Set the base path for user routes

app.post('/test', (req, res) => res.send('Test route is accessible'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});