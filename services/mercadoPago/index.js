"use strict";

var request = require('request');
const HttpStatusCodeOK = 200;

class mercadoPagoService {
    static async fetchClientCards(customer_id, mpAccessToken) {
        await request.get(
            `https://api.mercadopago.com/v1/customers/${customer_id}/cards?access_token=${mpAccessToken}`,
            function (error, response, body) {
                if (!error && response.statusCode === HttpStatusCodeOK) {
                    console.log(body);
                }
            }
        );
    }

    static async generateCardToken(mpPublicKey, cardId) {
        await request.post(
            `https://api.mercadopago.com/v1/card_tokens?public_key=${mpPublicKey}`,
            {json: { card_id: cardId }},
            function (error, response, body) {
                if (!error && response.statusCode === HttpStatusCodeOK) {
                    console.log(body);
                }
            }
        );
    }

    static async getPayment(mpPublicKey, transactionAmount, cardToken, description, issuer_id, customerId) {
        await request.post(
            `https://api.mercadopago.com/v1/payments?access_token=${mpPublicKey}`,
            { json: {
                transaction_amount: transactionAmount,
                token: cardToken,
                description: description,
                installments: installments,
                payment_method_id: "mercadopago_cc",
                issuer_id: issuer_id,
                payer:{
                    "type": "customer",
                    "id": customerId
                }
            } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body);
                }
            }
        );
    }
}

module.exports = mercadoPagoService;
