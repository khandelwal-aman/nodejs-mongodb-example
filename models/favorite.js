const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dish = new Schema({
    dish:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish'
    }
});

const favoriteSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [dish]
},{
    timestamps: true
});

var Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;