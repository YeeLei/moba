// Picarticle 集合(表) 定义文件
const mongoose = require('./db')

const PicarticleSchema = new mongoose.Schema(
  {
    title: { type: String },
    pic: { type: String },
    body: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    author: { type: String },
    hits: { type: Number, default: 0 },
    // 默认值是文章创建时间,存储的是时间戳
    date: {
      type: String,
      default: +new Date()
    },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Picarticle', PicarticleSchema)
