const express = require('express');
const router = express.Router();
const User = require('./mongo');

router.post('/profilguncelle', async (req, res) => {
    const { phone, firstName, lastName, email, password } = req.body;

    try {
        const user = await User.User.findOne({ phone: phone });

        if (user) {
            user.firstName = firstName || user.firstName;
            user.lastName = lastName || user.lastName;
            user.email = email || user.email;
            user.password = password || user.password;
            await user.save();

            if (user.isDietitian) {
                res.redirect('/diyetisyen.html');
            } else {
                res.redirect('/danisan.html');
            }
        } else {
            res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
