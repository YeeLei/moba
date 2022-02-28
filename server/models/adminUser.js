// adminUser 集合(表) 定义文件
const mongoose = require('./db')

const UserSchema = mongoose.Schema({
  email: { type: String, required: true }, // 系统管理员邮箱
  password: { // 密码
    type: String,
    // 查询数据时默认不把password字段带出来
    select: false, // 不显示密码
    // 密码加密
    set(val) {
      return require('bcryptjs').hashSync(val, 10)
    }
  },
  name: { // 姓名
    type: String,
    required: true
  },
  avatar: { //头像
    type: String
  }
},
  {
    timestamps: true // 生成时间戳
  }
)


module.exports = mongoose.model('AdminUser', UserSchema)
