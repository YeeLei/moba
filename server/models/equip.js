// goods 集合(表) 定义文件
const mongoose = require('./db')

const EquipSchema = mongoose.Schema({
  name: { type: String },
  icon: { type: String },
  // 装备属性
  attr: { type: Array },
  //装备描述
  desc: { type: String },
  // 所属铭文分类, 关联Category模型, 分类是唯一的
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
})


module.exports = mongoose.model('Equip', EquipSchema)
