const express = require('express');
const router = express.Router();
const User = require('./mongo');  

router.get('/', async (req, res) => {
    try {
        console.log('Fetching users...'); 
        const users = await User.User.find({ isDietitian: false });
        console.log('Fetched users:', users); 
        res.status(200).json(users); 
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;