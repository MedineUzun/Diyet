const express = require('express');
const path = require('path');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

require('./mongo');

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));
const uyeOlRoutes = require('./uyeol');
const girisYapRoutes = require('./girisyap');
const beslenmeRoutes = require('./beslenme');
const beslenmeOlusturRoutes = require('./beslenmeolustur');
const profilgorRoutes = require('./profilgor');
const randevuRoutes = require('./randevular');
const profilRoutes = require('./profil'); 

app.use('/uyeol', uyeOlRoutes);
app.use('/girisyap', girisYapRoutes);
app.use('/api/beslenme', beslenmeRoutes); 
app.use('/beslenmeolustur', beslenmeOlusturRoutes);
app.use('/api/profilgor', profilgorRoutes);
app.use('/', randevuRoutes); 
app.use('/', profilRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/home.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/signIn.html'));
});

app.get('/kadro', (req, res) => {
    const filePath = path.join(__dirname, '../client/kadro.html');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.log(err);  
            res.status(404).send('Dosya bulunamadı!');
        }
    });
});

app.get('/profilgor', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/profilgor.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
