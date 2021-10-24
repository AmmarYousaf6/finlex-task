var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(200, 'Your API is Running');
});

module.exports = router;
