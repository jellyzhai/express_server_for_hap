var express = require('express');
var path = require('path');
var router = express.Router();
var multer = require('multer');

// 设置 Multer 存储引擎,配置文件存储的路径和文件名。
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, path.join(__dirname, `../uploads`))  // 文件将被保存到 uploads/ 目录下
  },
  filename: function (req, file, cb) {
      console.log('file:', file)
      cb(null, Date.now() + '-' + file.originalname)  // 文件名为原文件名-时间戳
  }
});

// 创建 Multer 实例
const upload = multer({ storage: storage });

// 使用单个文件上传，file 是前端上传时的表单字段名, 需要前后端保持一致。
router.post('/', upload.single('file'), (req, res) => {
  console.log('req.file', req.file);
  // 上传的文件信息会保存在 req.file 或 req.files 中，其他表单字段保存在 req.body 中。
  if (!req.file) {
      return res.status(400).send('No files were uploaded.');
  }

  res.send('File is uploaded');
});

// 处理多个文件上传，files 是前端上传时的表单字段名，最多上传 5 个文件。
// app.post('/upload', upload.array('files', 5), (req, res) => {
//   console.log(req.files);
//   res.send('Files uploaded successfully');
// });

module.exports = router;
