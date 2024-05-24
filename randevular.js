const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { User } = require('./mongo');

const randevuSchema = new mongoose.Schema({
    diyetisyen: String,
    tarih: String,
    saat: String
});

const Randevu = mongoose.model('Randevu', randevuSchema);

router.post('/randevu-al', async (req, res) => {
    const yeniRandevu = new Randevu({
        diyetisyen: req.body.diyetisyen,
        tarih: req.body.tarih,
        saat: req.body.saat
    });

    try {
        await yeniRandevu.save();
        const user = await User.findOne({ firstName: req.body.diyetisyen});
        if (user) {
            user.randevular = user.randevular || [];
            user.randevular.push({ tarih: req.body.tarih, saat: req.body.saat });
            await user.save();
            res.redirect('/danisan.html');
        } else {
            res.send('Randevu kaydedildi ancak kullanıcı bulunamadı.');
        }
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;
