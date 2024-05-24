const mongoose = require('mongoose');

const uri = "mongodb+srv://medineeuzunn:w8rpRwa9ekuBLkJJ@cluster0.ut8uu85.mongodb.net/webprojesi";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB'ye başarıyla bağlanıldı!"))
.catch(err => console.error("MongoDB'ye bağlanırken hata oluştu:", err));

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    password: String,
    isDietitian: Boolean,
    randevular: [{
        tarih: String,
        saat: String
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = { User };

