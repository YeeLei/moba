import request from '@/utils/request'


// 新建文章
export function saveArticle(data) {
  return request({
    url: '/article/add',
    method: 'post',
    data
  })
}

// 删除文章
export function deleteArticle(params) {
  return request({
    url: '/article/delete',
    method: 'delete',
    params
  })
}

// 修改文章
export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'put',
    data
  })
}

// 获取文章列表
export function fetchArticle(params) {
  return request({
    url: '/article/list',
    method: 'get',
    params
  })
}

// 获取文章二级分类
export function fetchArticleTwo(params) {
  return request({
    url: '/article/cate',
    method: 'get',
    params
  })
}

// 获取文章详情
export function fetchArticleItem(params) {
  return request({
    url: '/article/item',
    method: 'get',
    params
  })
}

// 新建图文
export function savePicarticle(data) {
  return request({
    url: '/picarticle/add',
    method: 'post',
    data
  })
}

// 删除图文
export function deletePicarticle(params) {
  return request({
    url: '/picarticle/delete',
    method: 'delete',
    params
  })
}

// 修改图文
export function updatePicarticle(data) {
  return request({
    url: '/picarticle/update',
    method: 'put',
    data
  })
}

// 获取图文列表
export function fetchPicarticle(params) {
  return request({
    url: '/picarticle/list',
    method: 'get',
    params
  })
}

// 获取图文二级分类
export function fetchPicarticleTwo(params) {
  return request({
    url: '/picarticle/cate',
    method: 'get',
    params
  })
}

// 获取图文详情
export function fetchPicarticleItem(params) {
  return request({
    url: '/picarticle/item',
    method: 'get',
    params
  })
}

// 富文本编辑器文件上传
export function uploadEditorFile(data) {
  return request({
    url: '/upload/images',
    method: 'post',
    data
  })
}

// ----- 新建视频 -----
export function saveVideo(data) {
  return request({
    url: '/video/add',
    method: 'post',
    data
  })
}

// 删除视频
export function deleteVideo(params) {
  return request({
    url: '/video/delete',
    method: 'delete',
    params
  })
}

// 修改视频
export function updateVideo(data) {
  return request({
    url: '/video/update',
    method: 'put',
    data
  })
}

// 获取视频列表
export function fetchVideo(params) {
  return request({
    url: '/video/list',
    method: 'get',
    params
  })
}

// 获取视频二级分类
export function fetchVideoTwo(params) {
  return request({
    url: '/video/cate',
    method: 'get',
    params
  })
}

// 获取视频详情
export function fetchVideoItem(params) {
  return request({
    url: '/video/item',
    method: 'get',
    params
  })
}