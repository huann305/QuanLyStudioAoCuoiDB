const mongoose = require('mongoose');

const BillsSchema = new mongoose.Schema({
    idCustomer: {type: String, ref: 'Customers'},
    idEmployee: {type: String, ref: 'Employees'},
    date: {type: Date},
    totalPrice: {type: Number},
},{
    timestamps: true,
});

const Bills = mongoose.model('Bills', BillsSchema)

module.exports = Bills