const mongoose = require('mongoose');

const BillDetailsSchema = new mongoose.Schema({
    idBill: {type: String, ref: 'Bills'},
    idService: {type: String, ref: 'Services'},
    price: {type: Number},
    note: {type: String},
},{
    timestamps: true,
});

const BillDetails = mongoose.model('BillDetails', BillDetailsSchema)

module.exports = BillDetails