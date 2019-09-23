"use strict";

//const errors = require("../../errors");
const models = require("../../models");


module.exports = async (req, res) => {
    await models.Customers.findAll().then(customers => {
        if (!customers) {
            return res.status(200).json({"customers": {}});
        }
        return res.json({customers});
    }).catch((err) => {
        return res.status(500).json(err);
    });
};
