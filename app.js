var msg = 'Hello World';
console.log(msg);

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://anandhost:DYNGf7KKE0dGFs9Z@recluster.dawqed5.mongodb.net/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));
