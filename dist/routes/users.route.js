'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users.controller');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = _express2.default.Router();

userRouter.route('/users').get(function (req, res) {
	_users2.default.find(req, res);
}).post(function (req, res) {
	_users2.default.createUser(req, res);
});

userRouter.route('/users/:id').delete(function (req, res) {
	_users2.default.remove(req, res);
});

exports.default = userRouter;