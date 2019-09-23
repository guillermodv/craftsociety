"use strict";

const express = require("express");
const app = express();

const authenticate = require("./authenticate");
const customers = require("./customers");
const password = require("./password");
const payments = require("./payments");
const subscriptions = require("./subscriptions");


app.use("/subscriptions", subscriptions);
app.use("/customers", customers);
app.use("/authenticate", authenticate);
app.use("/payments", payments);
app.use("/password", password);

module.exports = app;
