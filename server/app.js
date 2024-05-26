const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Client dizinindeki statik dosyaları sun
app.use(express.static(path.join(__dirname, 'client')));

const uyeOlRoutes = require('./uyeol');
const girisYapRoutes = require('./girisyap');
const beslenmeOlusturRoutes = require('./beslenmeolustur');
const randevuRoutes = require('./randevular');
const profilRoutes = require('./profil'); 
const profilgorRoutes = require('./profilgor');
const nutritionRoutes = require('./nutrition');
const tarifler = require('./tarifler');

app.use('/uyeol', uyeOlRoutes);
app.use('/girisyap', girisYapRoutes);
app.use('/beslenmeolustur', beslenmeOlusturRoutes);
app.use('/randevular', randevuRoutes);
app.use('/profil', profilRoutes);
app.use('/profilgor', profilgorRoutes);
app.use('/nutrition', nutritionRoutes);
app.use('/tarifler', tarifler);

// Geri kalan istekleri client uygulamasına yönlendir
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'home.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
