const express = require('express');
const router = express.Router(); 
const Nutrition  = require('./nutrionSchema'); 


router.post('/', async (req, res) => {
    const nutritionPlan = new Nutrition.Nutrition(req.body);

    try {
        await nutritionPlan.save();
        res.redirect('/diyetisyen.html'); 
    } catch (err) {
        res.status(500).send('Beslenme planı kaydedilirken bir hata oluştu.');
    }
});

module.exports = router;


