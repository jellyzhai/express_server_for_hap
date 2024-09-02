var express = require("express");
var router = express.Router();

/* GET login page. */
router.get("/", function (req, res, next) {
  res.render("login");
});

/* Post. */
router.post("/", function (req, res, next) {
  if (req.body.username && req.body.password) {
    res.cookie('username', req.body.username);
    res.cookie('password', req.body.password);
    res.redirect('/');
  } else {
    res.render("login");
  }
});

module.exports = router;
