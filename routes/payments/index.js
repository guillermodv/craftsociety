const {PaymentController} = require('../../controllers');

const express = require("express");
const app = express();

app.get('/', PaymentController.fetchPayments);
// TODO: make this call POST
app.get('/execute', PaymentController.executePayments);

module.exports = app;
