const mongoose = require('mongoose');

const BillDetailsSchema = new mongoose.Schema({
    idBill: {type: String, ref: 'Bills'},
    idService: {type: String, ref: 'Services'},
    idServiceDetails: {type: String, ref: 'ServiceDetails'},
    price: {type: Number},
    note: {type: String},
},{
    timestamps: true,
});

const BillDetails = mongoose.model('BillDetails', BillDetailsSchema)

module.exports = BillDetails