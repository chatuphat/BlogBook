var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("blogs/index",{data:"Hello mongoose"});
});

module.exports = router;