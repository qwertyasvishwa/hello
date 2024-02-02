const bcrypt = require('bcryptjs');
const User = require('../models/User');

// User registration
exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send({ user });
    } catch (error) {
        console.log("Register endpoint hit", req.body);
        res.status(400).send(error);
    }
};

// User login
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).send('Invalid login credentials');
        }
        res.send({ user });
    } catch (error) {
        console.log("Login endpoint hit", req.body);
        res.status(500).send(error);
    }
};
