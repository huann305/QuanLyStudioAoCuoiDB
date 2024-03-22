const mongoose = require('mongoose');

const ServiceDetailsSchema = new mongoose.Schema({
    idService: {type: String, ref: 'Services'},
    price: {type: Number},
    status: {type: String},
    title: {type: String},
},{
    timestamps: true,
});

const ServiceDetails = mongoose.model('ServiceDetails', ServiceDetailsSchema)

module.exports = ServiceDetails