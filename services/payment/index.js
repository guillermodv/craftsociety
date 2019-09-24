"use strict";

const models = require('../../models');
const queryPayment = require('../../models/query_payment');
const mercadoPagoService = require('../../services/mercadoPago');

const MP_PUBLIC_KEY = 'TEST-cbbd9432-c899-42ce-9a6c-3c00282b6feb';
const MP_ACCESS_TOKEN = 'TEST-2416554951664021-071712-8502ea3ee082343343396c015cda4ab9__LA_LB__-99502409';


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
            if (payments) {
                payments.map(payment => {
                    const {customer_id, description, price} = payment;
                    const {cardId, payment_metod, issuer_id} = mercadoPagoService.fetchClientCards(customer_id, MP_ACCESS_TOKEN);
                    const {cardToken, public_key, cardholder} = mercadoPagoService.generateCardToken(MP_PUBLIC_KEY, cardId);
                    const response = mercadoPagoService.getPayment(MP_ACCESS_TOKEN, price, cardToken, description, issuer_id, customer_id);
                    // todo save in processed and errors.
                });
            };

            return res.json({response});
            // return res.json({processed: payments.length});
        }).catch((err) => {
            return res.status(500).json(err);
        });
    }
}

module.exports = PaymentService;
