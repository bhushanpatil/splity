"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var controller = {};

controller.get = function (req, res) {
	//res.json()
	res.send({ message: "hello there! this is test routes!" });
};

exports.default = controller;