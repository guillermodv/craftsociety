const {PaymentService} = require('../services');

class PaymentController {
    static async fetchPayments(req, res) {
        await PaymentService.fetchPayments(req, res);
    }

    static async executePayments(req, res) {
        await PaymentService.executePayments(req, res);
    }
}

module.exports = PaymentController;
