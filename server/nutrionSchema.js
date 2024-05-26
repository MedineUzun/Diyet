const mongoose = require('mongoose');

const uri = "mongodb+srv://medineeuzunn:w8rpRwa9ekuBLkJJ@cluster0.ut8uu85.mongodb.net/webprojesi";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB'ye başarıyla bağlanıldı!"))
.catch(err => console.error("MongoDB'ye bağlanırken hata oluştu:", err));

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


module.exports = {Nutrition};