'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dev = require('../config/dev.config');

var _dev2 = _interopRequireDefault(_dev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var conectToDb = async function conectToDb() {
  var dbHost = _dev2.default.dbhost;
  var dbPort = _dev2.default.dbport;
  var dbName = _dev2.default.dbname;
  await _mongoose2.default.connect('mongodb://' + dbHost + ':' + dbPort + '/' + dbName);
};

var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("db connected!!");
});

exports.default = conectToDb;