"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _users = require("../models/users.model");

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {};

controller.find = async function (req, res) {
	try {
		var users = await _users2.default.getAll();
		res.send(users);
	} catch (err) {
		res.send({
			message: "Failed to fetch data!",
			details: err,
			error: true
		});
	}
};

controller.createUser = async function (req, res) {
	try {
		var userToAdd = (0, _users2.default)({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			phone: req.body.phone
		});

		var newUser = await _users2.default.addUser(userToAdd);

		res.send({ message: "new user added!", data: newUser });
	} catch (err) {
		res.send({
			message: "Failed to create data!",
			details: err,
			error: true
		});
	}
};

controller.remove = async function (req, res) {
	try {

		var id = req.params.id;
		var removedUser = await _users2.default.removeUser(id);
		res.send({ message: "User removed successfully!", data: removedUser });
	} catch (err) {
		res.send({ message: 'Failed to delete', details: err, error: true });
	}
};

exports.default = controller;