"use strict";

const models = require('../../models');
const queryPayment = require('../../models/query_payment');

class PaymentService {
    static async fetchPayments(req, res) {
        await models.CustomersSubscriptionsPayments.findAll().then(payments => {
            if (!payments) {
                return res.status(200).json({payments: {}});
            }
            return res.json({payments});
        }).catch((err) => {
            return res.status(500).json(err);
        });
    }

    static async executePayments(req, res) {
        await models.sequelize.query(queryPayment, {type: models.sequelize.QueryTypes.SELECT}).then(payments => {
            if (!payments) {
                return res.status(200).json({processed: 0});
            }
            // TODO: mp api here
            return res.json({payments});
            // return res.json({processed: payments.length});
        }).catch((err) => {
            return res.status(500).json(err);
        });
    }
}

module.exports = PaymentService;
