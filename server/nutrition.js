const express = require('express');
const router = express.Router();
const Nutrition  = require('./nutrionSchema'); 


router.get('/', async (req, res) => {
    try {
        console.log('Fetching nutrition data...');
        const nutritionData = await Nutrition.Nutrition.find();
        console.log('Fetched nutrition data:', nutritionData);
        res.status(200).json(nutritionData); 
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;