"use strict";

//const errors = require("../../errors");
const models = require("../../models");


module.exports = async (req, res) => {

	await models.Subscriptions.findAll()
	.then(subscriptions => {
		if(!subscriptions) {
			return res.status(200).json({"subscriptions": {}});
		}
		return res.json({subscriptions});
	})
	.catch((err) => {
	  return res.status(500).json(err);
	});

};
