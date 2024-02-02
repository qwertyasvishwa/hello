const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://anandhost:DYNGf7KKE0dGFs9Z@recluster.dawqed5.mongodb.net/userDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('Could not connect to MongoDB...', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
