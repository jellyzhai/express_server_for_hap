var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function (req, res, next) {
  console.log("req.params", req.params); // 路径参数，如：/download/:id
  console.log("req.body", req.body); // POST 方法的参数
  console.log("req.query", req.query); // 查询参数，如：/download?id=123

  const filePath = path.join(__dirname, `../public/images/${'screen_shot_win11.png'}`);

  res.download(filePath, function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error downloading file");
    } else {
      console.log("File downloaded successfully");
    }
  });
});

module.exports = router;
