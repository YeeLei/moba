// 符文 集合(表) 定义文件
const mongoose = require('./db')

const StoreSchema = mongoose.Schema({
  name: { type: String },
  icon: { type: String },
  // 符文属性
  attr: { type: Array },
  // 所属符文分类, 关联Category模型, 分类是唯一的
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }

})


module.exports = mongoose.model('Store', StoreSchema)
