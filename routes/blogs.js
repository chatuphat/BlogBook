var express = require('express');
var router = express.Router();
const Blogs=require('../models/blogs')

router.get('/', function(req, res, next) {
  res.render("blogs/index",{data:"ข้อมูลบทความ"});
});

router.get('/add', function(req, res, next) {
  res.render("blogs/addForm",{data:"เพิ่มบทความ"});
});

module.exports = router;