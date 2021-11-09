# wang-moba

wang-moba 是使用 Node.js (Express.js) + Vue.js (Element UI) 全栈开发的王者荣耀手机端官网和管理后台项目

项目已上线，欢迎体验！<https://www.moba.tld>

如果对你有帮助话的帮忙点个 star，谢谢！

## 项目布局

```
admin  -- 后台项目
web    -- 前台项目
server -- 服务端
└── admin-api -- 后台管理系统的接口
    ├── handle.js -- 路由处理
    ├── router.js -- 路由定义
├── models -- 数据库模型
├── public -- 静态资源文件
└── upload -- 上传文件保存目录
    ├── images -- 存放上传图片
    ├── video -- 存放上传视频
├── utils -- 工具类
└── web-api -- 前台项目的接口
    ├── handle.js -- 路由处理
    ├── router.js -- 路由定义
├── app.js -- 项目入口文件
```

## 后台管理

1. 装备管理
2. 铭文管理
3. 文章管理
4. 视频管理
5. 英雄管理
6. 分类管理
7. 广告位管理
8. 管理员管理
