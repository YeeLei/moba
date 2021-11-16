// goods 集合(表) 定义文件
const mongoose = require('./db')

const UserSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: {
    type: String,
    // 查询数据时默认不把password字段带出来
    select: false, // 不显示密码
    // 密码加密
    set(val) {
      return require('bcryptjs').hashSync(val, 10)
    }
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
},
  {
    timestamps: true
  }
)


module.exports = mongoose.model('AdminUser', UserSchema)
