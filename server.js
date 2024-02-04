const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userRoutes = require('./routes/userRoutes');

mongoose.connect('mongodb+srv://anandhost:DYNGf7KKE0dGFs9Z@recluster.dawqed5.mongodb.net/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});