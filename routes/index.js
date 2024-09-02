var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("test_tag req.cookies", JSON.stringify(req.cookies));
  if (req.cookies?.username && req.cookies?.password) {
    res.render("index", { user: req.cookies?.username  });
  } else {
    res.render("not_login", {
      message: "请先登录"
    });
  }
});

module.exports = router;
