const express = require("express");
const app = express();

const getCustomers = require("../../services/customers/getCustomers");
app.get("/", getCustomers);

module.exports = app;
