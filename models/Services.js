const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
    serviceName: {type: String},
    price: {type: Number},
    status: {type: String},
    description: {type: String},
},{
    timestamps: true,
});

const Services = mongoose.model('Services', ServicesSchema)

module.exports = Services