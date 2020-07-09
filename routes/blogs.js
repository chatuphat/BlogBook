var express = require('express');
var router = express.Router();
const Blogs = require('../models/blogs')

router.get('/', function (req, res, next) {
  res.render("blogs/index", { data: "ข้อมูลบทความ" });
});

router.get('/add', function (req, res, next) {
  res.render("blogs/addForm", { data: "เพิ่มบทความ" });
});
router.post('/add', function (req, res, next) {
  data = new Blogs({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category
  })
  Blogs.createBlog(data,function(err){
    if(err) console.log(err);
    res.redirect("/")
  })
});

module.exports = router;