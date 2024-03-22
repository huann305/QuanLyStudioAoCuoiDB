const mongoose = require('mongoose');

const CustomersSchema = new mongoose.Schema({
    fullName: {type: String},
    phoneNumber: {type: String},
    address: {type: String},
},{
    timestamps: true,
});

const Customers = mongoose.model('Customers', CustomersSchema)

module.exports = Customers