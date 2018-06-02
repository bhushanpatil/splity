'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = _mongoose2.default.Schema({
    first_name: String,
    last_name: String,
    phone: String
});

var UsersModel = _mongoose2.default.model('User', userSchema);

UsersModel.getAll = function () {
    return UsersModel.find({});
};

UsersModel.addUser = function (userToAdd) {
    return userToAdd.save();
};

UsersModel.removeUser = function (id) {
    return UsersModel.remove({ _id: id });
};

exports.default = UsersModel;