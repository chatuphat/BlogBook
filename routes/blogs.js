var express = require('express');
var router = express.Router();
const Blogs = require('../models/blogs')
const { check, validationResult } = require('express-validator');

router.get('/', function (req, res, next) {
  Blogs.getAllBlogs(function (err, blogs) {
    if (err) throw err
    res.render("blogs/index", { data: "ข้อมูลบทความ", blogs: blogs });
  })
});

router.get('/add', function (req, res, next) {
  res.render("blogs/addForm", { data: "เพิ่มบทความ" });
});

router.get('/delete/:id', function (req, res, next) {
  Blogs.deleteBlog([req.params.id],function(err){
    if(err) throw err
    res.redirect("/blogs")
  })
});
router.post('/add', [
  check('title', 'กรุณาป้อนชื่อบทความ').not().isEmpty(),
  check('author', 'กรุณาป้อนชื่อผู้เขียน').not().isEmpty()
], function (req, res, next) {
  const result = validationResult(req);
  var errors = result.errors;
  for (var key in errors) {
    console.log(errors[key].value);
  }
  if (!result.isEmpty()) {
    //กรณีป้อนไม่ครบ
    res.render("blogs/addForm", { data: "เพิ่มบทความ",errors:errors});
  }else{
    data = new Blogs({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category
    })
  }
  
  Blogs.createBlog(data, function (err) {
    if (err) console.log(err);
    res.redirect("/blogs")
  })
});

module.exports = router;