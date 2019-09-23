const express = require("express");
const app = express();

const getSubscriptions = require("../../services/subscriptions/getSubscriptions");
app.get("/", getSubscriptions);

module.exports = app;
