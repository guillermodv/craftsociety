"use strict";

const axios = require('axios');
const {head} = require('lodash');

class mercadoPagoService {
    static async fetchClientCards(mpAccessToken, customer_id) {
        try {
            const response = await axios.get(`https://api.mercadopago.com/v1/customers/${customer_id}/cards?access_token=${mpAccessToken}`);
            const r = head(response.data);
            return {
                cardId: r.id,
                paymentMethodId: r.payment_method.id,
                paymentTypeId: r.payment_method.payment_type_id,
                issuerId: r.issuer.id
            }
        } catch (err) {
            return err.response.data;
        }
    }

    static async generateCardToken(mpPublicKey, cardId) {
        try {
            const response = await axios.post(
                `https://api.mercadopago.com/v1/card_tokens?public_key=${mpPublicKey}`,
                {json: {card_id: cardId}}
            );
            const r = response.data;
            return {
                cardToken: r.id
            }
        } catch (err) {
            return err.response.data;
        }
    }

    static async getPayment(mpAccessToken, transactionAmount, cardToken, description, issuer_id, customerId, paymentMethodId) {
        try {
            return await axios.post(
                `https://api.mercadopago.com/v1/payments?access_token=${mpAccessToken}`,
                {
                    transaction_amount: transactionAmount,
                    token: cardToken,
                    description: description,
                    installments: 1,
                    payment_method_id: paymentMethodId,
                    issuer_id: issuer_id,
                    payer: {
                        type: "customer",
                        id: customerId
                    }
                }
            );
        } catch (err) {
            return err.response.data;
        }
    }
}

module.exports = mercadoPagoService;
