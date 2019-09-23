"use strict";

const Sequelize = require("sequelize");
const path = require("path");
const bluebird = require("bluebird");

const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD, {
        host: DB_HOST,
        dialect: 'mysql',
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        define: {
            charset: "utf8",
            collate: "utf8_general_ci"
        }
    });

Object.assign(sequelize, {Promise: bluebird});

const db = {
    CustomersCards: sequelize.import(path.resolve(__dirname, "customer_cards.js")),
    CustomersSubscriptionsInvoices: sequelize.import(path.resolve(__dirname, "customer_subscription_invoices.js")),
    CustomersSubscriptionsOrders: sequelize.import(path.resolve(__dirname, "customer_subscription_orders.js")),
    CustomersSubscriptionsPayments: sequelize.import(path.resolve(__dirname, "customer_subscription_payments.js")),
    CustomersSubscriptions: sequelize.import(path.resolve(__dirname, "customer_subscriptions.js")),
    CustomersAdresses: sequelize.import(path.resolve(__dirname, "customers_addresses.js")),
    Customers: sequelize.import(path.resolve(__dirname, "customers.js")),
    Jobs: sequelize.import(path.resolve(__dirname, "jobs.js")),
    Notifications: sequelize.import(path.resolve(__dirname, "notifications.js")),
    Regions: sequelize.import(path.resolve(__dirname, "regions.js")),
    Subscription_products: sequelize.import(path.resolve(__dirname, "subscription_products.js")),
    Subscriptions: sequelize.import(path.resolve(__dirname, "subscriptions.js")),
    Users: sequelize.import(path.resolve(__dirname, "users.js"))
};

Object.keys(db).forEach(modelName => {
    if (db[modelName] && db[modelName].setAssociation instanceof Function) {
        db[modelName].setAssociation(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
