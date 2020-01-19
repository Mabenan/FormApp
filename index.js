var express = require('express');
var proxy = require('express-http-proxy');
var request = require('request');
var app = express();
app.use('/', express.static('dist/wufooApp'));
app.use(
  '/api', function (req, res, next) {
    console.log("https://mabenan.wufoo.com" + req.path);
    request({
      uri: "https://mabenan.wufoo.com/api" + req.path,
      method: req.method,
      auth: {
        'username': '70PT-QQ13-CD9S-O7RN',
        'password': 'footastic',
        "sendImmediately": false
      }
    }, function (error, response, body) {
      console.log(error);
      res.send(body);
    }
    );
  }
);
const server = app.listen(80, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
