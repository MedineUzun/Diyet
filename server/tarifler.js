const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Tarif = require('./mongo'); 




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/tarif-ekle', upload.single('image'), (req, res) => {
  const newTarif = new Tarif({
    title: req.body.title,
    description: req.body.description,
    image: req.file.filename
  });

  newTarif.save((err) => {
    if (err) {
      res.status(500).send('Veritabanına kaydedilemedi!');
    } else {
      res.status(200).send('Tarif başarıyla eklendi!');
    }
  });
});

module.exports = router;