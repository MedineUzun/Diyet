const express = require('express');
const router = express.Router();
const { User } = require('./mongo'); 

router.post('/', async (req, res) => {
    const { phone, password } = req.body;
    console.log("Formdan gelen veriler:", phone, password);

    try {
        const user = await User.findOne({ phone, password }); 
        if (user) {
            console.log("Giriş başarılı:", user);
            if (user.isDietitian) {
                res.redirect('/diyetisyen.html');
            } else {
                res.redirect('/danisan.html');
            }
        } else {
            console.log("Giriş başarısız: Kullanıcı bulunamadı.");
            res.status(401).send('Telefon numarası veya şifre yanlış.');
        }
    } catch (err) {
        console.error("Sunucu hatası:", err);
        res.status(500).send('Sunucu hatası.');
    }
});

module.exports = router;
