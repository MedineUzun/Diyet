const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('./mongo'); 

const nutritionSchema = new mongoose.Schema({
    breakfast: String,
    snacks: String,
    lunch: String,
    dinner: String,
    midnightSnack: String,
    beverages: String,
    maxProtein: Number,
    maxCarbs: Number,
    maxFat: Number,
    maxCalories: Number
});
const Nutrition = mongoose.model('Nutrition', nutritionSchema);


router.post('/', async (req, res) => {
    const nutritionPlan = new Nutrition(req.body);

    try {
        await nutritionPlan.save();
        res.redirect('/diyetisyen.html'); 
    } catch (err) {
        res.status(500).send('Beslenme planı kaydedilirken bir hata oluştu.');
    }
});

module.exports = router;
