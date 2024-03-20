const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
    categoryName: {type:String},
}, {timestamps: true})

const Categories = mongoose.model('Categories', CategoriesSchema)

module.exports = Categories