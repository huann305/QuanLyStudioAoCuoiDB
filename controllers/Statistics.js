const express = require('express');
const router = express.Router();
const BillDetails = require('../models/BillDetails')
const Bills = require('../models/Bills')
const ServiceDetails = require('../models/ServiceDetails')
const Services = require('../models/services')

//get revenue
router.get('/revenue', async function (req, res, next) {
    try {
        const { startDate, endDate } = req.query
        console.log(startDate, endDate)
        const query = { date: { $gte: startDate, $lte: endDate } }
        const revenue = await Bills.find(query)

        let total = 0
        for (let i = 0; i < revenue.length; i++) {
            total += revenue[i].totalPrice
        }

        res.status(200).json(total)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//tinh tong theo dv
router.get('/totalServicePrice', async function (req, res, next) {
    try {
        const { startDate, endDate, idService } = req.query;
        console.log(startDate, endDate, idService);
        const queryBill = {
            date: { $gte: startDate, $lte: endDate }
        };
        const bills = await Bills.find(queryBill);

        let total = 0;

        for (let i = 0; i < bills.length; i++) {
            const billDetails = await BillDetails.find({ idBill: bills[i]._id, idService: idService });
            for (let j = 0; j < billDetails.length; j++) {
                total += billDetails[j].price;
            }
        }
        res.status(200).json(total);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/sales', async function (req, res, next) {
    try {
        const services = await Services.find()

        const { startDate, endDate } = req.query
        console.log(startDate, endDate)
        const query = { date: { $gte: startDate, $lte: endDate } }
        const bills = await Bills.find(query)

        const listBillDetails = []
        const listIdServiceDetails = []

        for (let i = 0; i < bills.length; i++) {
            const billDetails = await BillDetails.find({ idBill: bills[i]._id })

            //count idService in billDetails
            for (let j = 0; j < billDetails.length; j++) {
                listIdServiceDetails.push(billDetails[j].idServiceDetails)
                listBillDetails.push(billDetails[j])
            }
        }
        const listServiceDetails = []
        for (let i = 0; i < listIdServiceDetails.length; i++) {
            const serviceDetails = await ServiceDetails.findById(listIdServiceDetails[i])
            listServiceDetails.push(serviceDetails)
        }

        const aaa = []
        for (let i = 0; i < services.length; i++) {
            const test = await BillDetails.countDocuments({ idService: services[i]._id })
            //count idService in billDetails
            let count = 0
            for (let j = 0; j < listServiceDetails.length; j++) {
                if (listServiceDetails[j].idService == services[i]._id.toString()) {
                    count += listBillDetails[j].price
                }
            }
            aaa.push({ idService: services[i]._id, count: test, totalPrice: count })
        }
        const kq = []

        // const service = aaa.find(x => x.idService === service._id);
        // aaa.filter(x => {
        //     return kq.push({
        //         idService: x.idService,
        //         count: aaa[i].count,
        //         totalPrice: aaa[i].totalPrice,
        //         serviceName: service ? service.serviceName : ''
        //     })
        // })



        for (let i = 0; i < aaa.length; i++) {
            const service = await Services.findById(aaa[i].idService);
            kq.push({
                idService: aaa[i].idService,
                count: aaa[i].count,
                totalPrice: aaa[i].totalPrice,
                serviceName: service ? service.serviceName : ''
            });
        }


        res.status(200).json(kq);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//tinh tong theo dv
router.get('/totalServicePrice', async function (req, res, next) {
    try {
        const { startDate, endDate, idService } = req.query;
        console.log(startDate, endDate, idService);
        const queryBill = {
            date: { $gte: startDate, $lte: endDate }
        };
        const bills = await Bills.find(queryBill);

        let total = 0;

        for (let i = 0; i < bills.length; i++) {
            const billDetails = await BillDetails.find({ idBill: bills[i]._id, idService: idService });
            for (let j = 0; j < billDetails.length; j++) {
                total += billDetails[j].price;
            }
        }
        res.status(200).json(total);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router