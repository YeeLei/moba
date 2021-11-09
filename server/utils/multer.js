const multer = require('multer')
const path = require('path')

function hangleMulter() {
  // 使用硬盘存储模式设置存放接收到的文件的路径以及文件名
  let storage = multer.diskStorage({
    // 接收到文件后输出的保存路径（若不存在则需要创建）
    destination: function (req, file, cb) {
      // 根据上传的mimitype字段判断上传的是图片还是视频
      file.pathUrl = 'upload/images'
      if (file.mimetype.indexOf('video') != -1) {
        file.pathUrl = 'upload/video'
      }
      cb(null, path.join(__dirname, '../', file.pathUrl))
    },
    filename: function (req, file, cb) {
      // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
      cb(null, Date.now() + '-' + file.originalname);
    }
  })
  const upload = multer({ storage })

  return upload

}

module.exports = hangleMulter