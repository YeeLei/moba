const express = require('express')
const path = require('path')
const routerAdmin = require('./admin-api/router')
const routerWeb = require('./web-api/router')

const app = express()

// 跨域处理
app.use(require('cors')())
// 处理 post 请求的数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/admin', express.static(path.join(__dirname, 'admin')))
app.use('/', express.static(path.join(__dirname, 'web')))

// 注册路由
app.use('/admin', routerAdmin)
app.use('/web', routerWeb)


const PORT = 3007

app.listen(PORT, () => {
  console.log(`RUN IN: http://localhost:${PORT}`)
})