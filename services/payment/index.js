"use strict";

const models = require('../../models');
const queryPayment = require('../../models/query_payment');
const mercadoPagoService = require('../../services/mercadoPago');
const {escapeString} = require('../../util/functions');

const {MP_PUBLIC_KEY, MP_ACCESS_TOKEN} = process.env;

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
        try {
            const payments = await models.sequelize.query(queryPayment, {type: models.sequelize.QueryTypes.SELECT});

            const batch = {
                approved: 0,
                errors: 0,
                processed: 0,
                totalToProcess: payments.length
            };

            if (!payments) {
                return res.status(200).json({batch});
            }

            if (payments) {
                for (const payIt in payments) {
                    const payment = payments[payIt];

                    const {
                        title,
                        customer_id,
                        subscription_id,
                        mercadopago_customer_id,
                        mercadopago_card_id,
                        issuer_id,
                        payment_method_id,
                        price,
                        customer_subscriptions_id,
                        next_billing_on_approve
                    } = payment;
                    // const {cardId, paymentMethodId, issuerId} = await mercadoPagoService.fetchClientCards(MP_ACCESS_TOKEN, mercadopago_customer_id);
                    const {cardToken} = await mercadoPagoService.generateCardToken(MP_PUBLIC_KEY, mercadopago_card_id);
                    const response = await mercadoPagoService.getPayment(MP_ACCESS_TOKEN, price, cardToken, title, issuer_id, mercadopago_customer_id, payment_method_id);
                    batch.processed++;

                    if (response.status === 'approved') {
                        const query = "UPDATE customer_subscriptions SET current_billing=CURDATE(), next_billing='"+next_billing_on_approve+"',billing_attempts=0 WHERE id="+customer_subscriptions_id;
                        await models.sequelize.query(query);

                        batch.approved++;
                    } else {
                        const query = "UPDATE customer_subscriptions SET billing_attempts=billing_attempts+1 WHERE id="+customer_subscriptions_id;
                        await models.sequelize.query(query);
                        batch.errors++;
                    }
                    const query = "INSERT INTO payment_logs SET customer_id="+customer_id+",subscription_id="+subscription_id+",time=NOW(),response='"+escapeString(response.status)+"',response_log='"+escapeString(JSON.stringify(response))+"';";
                    await models.sequelize.query(query);
                }
            }

            return res.json({batch});
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = PaymentService;
