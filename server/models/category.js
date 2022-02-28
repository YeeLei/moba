// 系统分类 集合(表) 定义文件
const mongoose = require('./db')

const CategorySchema = mongoose.Schema({
  // 分类名称
  name: { type: String },
  // 所属分类, 关联Category模型, 分类是唯一的
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
})


module.exports = mongoose.model('Category', CategorySchema)
