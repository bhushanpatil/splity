'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _test = require('./routes/test.route');

var _test2 = _interopRequireDefault(_test);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _db = require('./utils/db');

var _db2 = _interopRequireDefault(_db);

var _users = require('./routes/users.route');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

(0, _db2.default)();

app.set('port', process.env.PORT || 3001);

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

var accessLogStream = _fs2.default.createWriteStream(_path2.default.join(__dirname, 'access.log'), { flags: 'a' });
app.use((0, _morgan2.default)('combined', { stream: accessLogStream }));

app.get('/', function (req, res) {
  res.send("200", "Hello There!");
});

app.use('/test', _test2.default);
app.use(_users2.default);

//error handlers

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.listen(app.get('port'), function () {
  console.log('App started on port ' + app.get('port') + ' ');
});

//todo
/*
1. setup logger
2. setup mongodb
3. mongo model + curd
4. aws s3 file upload
5. aws other service api
6. unit test
7. file handling
8. cluster + fork + scaling 
9. authentication using passport + jwt
10.middelware
*/