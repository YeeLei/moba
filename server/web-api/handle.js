// 路由处理函数
const mongoose = require('mongoose')
const AdModel = require('../models/ad')
const CategoryModel = require('../models/category')
const ArticleModel = require('../models/article')
const HeroModel = require('../models/hero')
const VideoModel = require('../models/video')

const response = require('../utils/response')
const random = require('../utils/random')
const awaitWrap = require('../utils/error')

// 对应路由的处理函数
module.exports = {
  // 录入英雄数据
  async heroesInitHandle(req, res) {
    const rowData = [{ "name": "热门", "heroes": [{ "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "妲己", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" }, { "name": "安琪拉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "吕布", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "瑶", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg" }] }, { "name": "战士", "heroes": [{ "name": "赵云", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" }, { "name": "墨子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" }, { "name": "钟无艳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" }, { "name": "吕布", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "夏侯惇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" }, { "name": "曹操", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg" }, { "name": "典韦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg" }, { "name": "宫本武藏", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg" }, { "name": "达摩", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" }, { "name": "老夫子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg" }, { "name": "关羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg" }, { "name": "程咬金", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" }, { "name": "露娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" }, { "name": "花木兰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" }, { "name": "橘右京", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "刘备", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg" }, { "name": "杨戬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg" }, { "name": "雅典娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg" }, { "name": "哪吒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "苏烈", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" }, { "name": "梦奇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg" }, { "name": "裴擒虎", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" }, { "name": "狂铁", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg" }, { "name": "孙策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "李信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg" }, { "name": "盘古", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg" }, { "name": "云中君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" }, { "name": "曜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg" }, { "name": "马超", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg" }, { "name": "蒙恬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg" }, { "name": "夏洛特", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg" }, { "name": "司空震", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg" }, { "name": "云缨", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg" }] }, { "name": "法师", "heroes": [{ "name": "小乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg" }, { "name": "墨子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg" }, { "name": "妲己", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg" }, { "name": "嬴政", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg" }, { "name": "高渐离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg" }, { "name": "孙膑", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" }, { "name": "扁鹊", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg" }, { "name": "芈月", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" }, { "name": "周瑜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg" }, { "name": "甄姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg" }, { "name": "武则天", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg" }, { "name": "貂蝉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" }, { "name": "安琪拉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg" }, { "name": "露娜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg" }, { "name": "姜子牙", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg" }, { "name": "王昭君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg" }, { "name": "张良", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg" }, { "name": "不知火舞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" }, { "name": "钟馗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" }, { "name": "诸葛亮", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg" }, { "name": "干将莫邪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg" }, { "name": "梦奇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg" }, { "name": "女娲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg" }, { "name": "杨玉环", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg" }, { "name": "弈星", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg" }, { "name": "米莱狄", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg" }, { "name": "司马懿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" }, { "name": "沈梦溪", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg" }, { "name": "上官婉儿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" }, { "name": "嫦娥", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" }, { "name": "西施", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg" }, { "name": "司空震", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg" }] }, { "name": "坦克", "heroes": [{ "name": "廉颇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg" }, { "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "刘禅", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" }, { "name": "钟无艳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg" }, { "name": "白起", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg" }, { "name": "芈月", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg" }, { "name": "吕布", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg" }, { "name": "夏侯惇", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg" }, { "name": "达摩", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg" }, { "name": "项羽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg" }, { "name": "程咬金", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg" }, { "name": "刘邦", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg" }, { "name": "亚瑟", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg" }, { "name": "牛魔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" }, { "name": "张飞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" }, { "name": "太乙真人", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" }, { "name": "东皇太一", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg" }, { "name": "铠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg" }, { "name": "苏烈", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg" }, { "name": "孙策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg" }, { "name": "盾山", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg" }, { "name": "嫦娥", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg" }, { "name": "猪八戒", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg" }, { "name": "蒙恬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg" }, { "name": "阿古朵", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg" }] }, { "name": "刺客", "heroes": [{ "name": "赵云", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg" }, { "name": "阿轲", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg" }, { "name": "李白", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg" }, { "name": "貂蝉", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg" }, { "name": "韩信", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg" }, { "name": "兰陵王", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg" }, { "name": "花木兰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg" }, { "name": "不知火舞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg" }, { "name": "娜可露露", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg" }, { "name": "橘右京", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg" }, { "name": "孙悟空", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg" }, { "name": "百里守约", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" }, { "name": "百里玄策", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg" }, { "name": "裴擒虎", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg" }, { "name": "元歌", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg" }, { "name": "司马懿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg" }, { "name": "上官婉儿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg" }, { "name": "云中君", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg" }, { "name": "马超", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg" }, { "name": "镜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg" }, { "name": "澜", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg" }, { "name": "云缨", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg" }] }, { "name": "射手", "heroes": [{ "name": "孙尚香", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg" }, { "name": "鲁班七号", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg" }, { "name": "马可波罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg" }, { "name": "狄仁杰", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg" }, { "name": "后羿", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg" }, { "name": "李元芳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg" }, { "name": "虞姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg" }, { "name": "成吉思汗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg" }, { "name": "黄忠", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg" }, { "name": "百里守约", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg" }, { "name": "公孙离", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg" }, { "name": "伽罗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg" }, { "name": "蒙犽", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg" }, { "name": "艾琳", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg" }] }, { "name": "辅助", "heroes": [{ "name": "庄周", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg" }, { "name": "刘禅", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg" }, { "name": "孙膑", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg" }, { "name": "牛魔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg" }, { "name": "张飞", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg" }, { "name": "钟馗", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg" }, { "name": "蔡文姬", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg" }, { "name": "太乙真人", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg" }, { "name": "大乔", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg" }, { "name": "东皇太一", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg" }, { "name": "鬼谷子", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg" }, { "name": "明世隐", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg" }, { "name": "盾山", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg" }, { "name": "瑶", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg" }, { "name": "鲁班大师", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg" }, { "name": "阿古朵", "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg" }] }]

    for (let cat of rowData) {
      if (cat.name === '热门' || cat.name === '坦克' || cat.name === '射手' || cat.name === '辅助' || cat.name === '战士' || cat.name === '法师') {
        continue
      }

      // 找到当前分类在数据库中对应的数据
      const category = await CategoryModel.findOne({ name: cat.name })

      cat.heroes = cat.heroes.map(hero => {
        hero.categories = [category]
        return hero
      })

      //录入英雄
      await HeroModel.insertMany(cat.heroes)
    }
    // res.send(rowData)
    res.send(await HeroModel.find())
  },

  // 首页广告
  async homeAdsHandle(req, res) {
    const homeAds = await AdModel.findById('617a168c973008d77255c86a')
    response(res, 0, '获取首页广告数据成功', homeAds.items)
  },

  // 首页新闻资讯数据
  async newsListOneHandle(req, res) {
    // 查询新闻资讯二级分类，以及属于该分类下的所有文章, 每个二级分类取前5篇文章
    const catesData = await CategoryModel.aggregate([
      { $match: { parent: mongoose.Types.ObjectId('6179fde964b8e1d4a798d93d') } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      }
    ])
    // 添加一个热门分类, 
    catesData.unshift({
      name: '热门',
      newsList: await ArticleModel.find().where({ hot: true })
        .populate('categories').sort({ date: -1 }).limit(5).lean()
    })
    // 给每篇文章添加一个 categoryName 字段, 热门分类就取最后一个分类的名字
    catesData.map(cate => {
      cate.newsList.map(news => {
        news.categoryName = cate.name === '热门' ?
          news.categories[news.categories.length - 1].name : cate.name
        return news
      })
      cate.newsList.sort((a, b) => {
        if (a.date > b.date) {
          return -1
        } else if (a.date == b.date) {
          return 0
        } else {
          return 1
        }
      })
      return cate
    })
    catesData.map(cate => {
      return cate.newsList = cate.newsList.slice(0, 5)
    })
    response(res, 0, '获取首页新闻数据成功', catesData)
  },

  // 文章详情
  async articleItemHandle(req, res) {
    const item = await ArticleModel.findById(req.query.id).lean()
    // 先把相关文章都查出来
    const related = await ArticleModel.find().where({
      categories: { $in: item.categories },
      _id: { $nin: [req.query.id] }
    })
    // 随机插入两篇相关文章
    item.related = []
    let r1 = random(0, related.length - 1)
    let r2 = random(0, related.length - 1)
    if (r1 == r2 == related.length - 1) {
      r2 = r2 - 1
    }
    if (r1 == r2 && r1 < related.length - 1) {
      r2 = r2 + 1
    }

    if (r1 == r2) {
      item.related.push(related[r1])
    } else {
      item.related.push(related[r1])
      item.related.push(related[r2])
    }

    response(res, 0, '获取文章详情成功', item)
  },

  // 文章列表
  async newsListTwoHandle(req, res) {
    // 获取前端传过来的参数
    let { newsType, page, pageSize } = req.query
    // 参数处理
    page = Number(page) ? Number(page) : 1
    pageSize = Number(pageSize) ? Number(pageSize) : 8
    const skip = (page - 1) * pageSize

    // 返回的新闻列表数据
    let newsList = []
    // 是否有下一页
    let hasNext = true

    if (newsType === '热门') {
      newsList = await ArticleModel.find().where({ hot: true })
        .populate('categories').limit(pageSize).skip(skip).sort({ date: -1 }).lean()
      // 热门的新闻总数
      let newsTotal = await ArticleModel.find().where({ hot: true }).countDocuments()
      // 没有下一页
      if ((skip + newsList.length) >= newsTotal) {
        hasNext = false
      }
      // 给每篇文章添加categoryName字段
      newsList.forEach(news => {
        news.categoryName = news.categories[news.categories.length - 1].name
      })
      newsList.sort((a, b) => {
        return a.date < b.date
      })
    } else {
      // 先把对应分类信息查出来
      const category = await CategoryModel.findOne().where({ name: newsType })
      // 根据分类的id取查找对应文章
      newsList = await ArticleModel.find().where({
        categories: { $in: [category._id] }
      }).populate('categories').skip(skip).limit(pageSize).sort({ date: -1 }).lean()

      // 当前分类的新闻总数
      let newsTotal = await ArticleModel.find().where({
        categories: { $in: [category._id] }
      }).countDocuments()
      // 没有下一页
      if ((skip + newsList.length) >= newsTotal) {
        hasNext = false
      }
      // 给每篇文章添加categoryName字段
      newsList.forEach(news => { news.categoryName = newsType })
      newsList.sort((a, b) => {
        return a.date < b.date
      })
    }
    response(res, 0, '获取新闻列表成功', { newsList, hasNext })
  },

  // 首页英雄数据
  async heroListOneHandle(req, res) {
    // 查询英雄二级分类，以及属于该分类下的所有英雄
    const catesData = await CategoryModel.aggregate([
      { $match: { parent: mongoose.Types.ObjectId('6179fe1964b8e1d4a798d93e') } },
      {
        $lookup: {
          from: 'heros',
          localField: '_id',
          foreignField: 'categories',
          as: 'heroList'
        }
      }
    ])
    // 添加一个热门分类
    catesData.unshift({
      name: '热门',
      heroList: await HeroModel.find().where({ hot: true }).limit(10)
    })
    response(res, 0, '获取首页英雄数据成功', catesData)
  },

  // 英雄详情
  async heroItemHandle(req, res) {
    const { id } = req.query
    /* 
      关联查询出该英雄所有关联的详细数据, 由于英雄关系的三个字段不是直接关联英雄表,
      而是其每一子项里面的hero字段关联英雄表, 所以需要
      两级的populate查询才行, 
      populate({
        path: 'partners',  // 表示最外层的字段
        populate: { path: 'hero', select: 'avatar' }  // select表示需取avatar字段
      })
    */
    const item = await HeroModel.findById(id)
      .populate('categories').populate('luckyEquip').populate('shitEquip')
      .populate('storeRecommend')
      .populate({
        path: 'partners',
        populate: { path: 'hero', select: 'avatar' }
      })
      .populate({
        path: 'enemies',
        populate: { path: 'hero', select: 'avatar' }
      })
      .populate({
        path: 'preies',
        populate: { path: 'hero', select: 'avatar' }
      })
    response(res, 0, '获取英雄详情成功', item)
  },

  // 英雄列表分类
  async heroCateHandle(req, res) {
    const cate = await CategoryModel.find()
      .where({ parent: '6179fe1964b8e1d4a798d93e' }).lean()
    cate.unshift({ name: '全部' })
    response(res, 0, '获取英雄分类成功', cate)
  },

  // 英雄列表数据
  async heroListTwoHandle(req, res) {
    let { heroType } = req.query
    // 返回的英雄数据
    let heroList = []

    if (heroType === '全部') {
      heroList = await HeroModel.find()
    } else {
      // 先把对应分类信息查出来
      const category = await CategoryModel.findOne().where({ name: heroType })
      // 根据分类的id取查找对应文章
      heroList = await HeroModel.find().where({
        categories: { $in: [category._id] }
      })
    }

    response(res, 0, '获取英雄列表成功', heroList)
  },

  // 首页视频数据
  async videoListOneHandle(req, res) {
    // 查询精彩视频二级分类，以及属于该分类下的所有视频
    const catesData = await CategoryModel.aggregate([
      { $match: { parent: mongoose.Types.ObjectId('6179fe2764b8e1d4a798d93f') } },
      {
        $lookup: {
          from: 'videos',
          localField: '_id',
          foreignField: 'category',
          as: 'videoList'
        }
      },
    ])

    catesData.map(cate => {
      cate.videoList.sort((a, b) => {
        if (a.date > b.date) {
          return -1
        } else if (a.date == b.date) {
          return 0
        } else {
          return 1
        }
      })
      return cate
    })
    response(res, 0, '获取首页视频数据成功', catesData)
  },

  // 赛事中心二级分类
  async matchCateHandle(req, res) {
    const cate = await CategoryModel.find().where({ parent: '61849eec73c5253352104d2b' })
    response(res, 0, '获取赛事中心二级分类成功', cate)
  },

  // 赛事中心文章
  async matchArticleHandle(req, res) {
    const params = req.query.params
    // 每页文章数量
    const pageSize = 10
    // 查询英雄二级分类，以及属于该分类下的所有文章
    let catesData = await CategoryModel.aggregate([
      { $match: { parent: mongoose.Types.ObjectId('61849eec73c5253352104d2b') } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'matchList'
        }
      }
    ])
    // 根据params遍历 cateesDate截取每一个分类下的文章数量
    catesData.forEach((item, i) => {
      // 标记当前分类下的文章是否全部请求了
      item.hasNext = true
      let page = 1
      params.forEach((par, j) => {
        par = JSON.parse(par)
        if (par.name == item.name) {
          page = par.page
          return
        }
      })
      let skip = page * pageSize
      // 请求的文章数量大于或等于最大数量
      if (skip >= item.matchList.length) {
        item.hasNext = false
        skip = item.matchList.length
      }
      // 截取数组 0 - skip(不包括)
      item.matchList = item.matchList.slice(0, skip)
    })

    response(res, 0, '获取赛事中心文章成功', catesData)

  },

  // 最新英雄广告图
  async newHeroAdsHandle(req, res) {
    const newHeroAds = await AdModel.findById('617b9753621c050694c68cff')
    response(res, 0, '获取最新英雄广告数据成功', newHeroAds.items)
  },

  // 策略中心轮播图
  async strategyAdsHandle(req, res) {
    const strategyAds = await AdModel.findById('617a946c6b5762df59727c19')
    response(res, 0, '获取策略中心广告数据成功', strategyAds.items)
  },

  // 视频排行榜
  async videoRankHandle(req, res) {
    const dayRank = await VideoModel.find().limit(10).sort({ play: -1 })
    const weekRank = await VideoModel.find().skip(3).limit(10).sort({ play: -1 })
    const monthRank = await VideoModel.find().skip(6).limit(10).sort({ play: -1 })

    let catesData = [
      {
        name: '日排行',
        videoList: dayRank
      },
      {
        name: '周排行',
        videoList: weekRank
      },
      {
        name: '月排行',
        videoList: monthRank
      },
    ]
    response(res, 0, '获取视频排行数据成功', catesData)
  }

}