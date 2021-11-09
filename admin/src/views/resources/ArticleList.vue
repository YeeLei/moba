<template>
  <div id="article-list">
    <el-card class="box-card data-list-card">
      <div class="left">
        <i class="el-icon-document"></i>
        <span class="title">数据列表</span>
      </div>
      <div class="right">
        <el-button size="small" @click="$router.push('/resource/articleAdd')">添加</el-button>
      </div>
    </el-card>

    <div class="search">
      <el-input placeholder="搜索视频" v-model="title">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <el-table
      :data="articleList"
      border
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column prop="number" label="编号" width="70"> </el-table-column>
      <el-table-column prop="title" label="文章标题" width="500"> </el-table-column>
      <el-table-column prop="categories" :formatter="categoryFormat" label="所属分类" width="280">
      </el-table-column>
      <el-table-column prop="date" label="上传时间" width="220" sortable> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="$router.push(`/resource/articleUpdate/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="deleteArticle(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="articleTotal"
        :page-size="pageSize"
        :current-page="page"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { fetchArticle, deleteArticle } from '@/api/resource'
import dayjs from 'dayjs'
export default {
  name: 'ArticleList',
  data() {
    return {
      articleTotal: 20,
      pageSize: 5,
      page: 1,
      articleList: [],
      title: '',
    }
  },
  watch: {
    // 搜索框内容变化时获取数据
    title() {
      this.page = 1
      this.fetchArticle()
    },
  },
  mounted() {
    this.fetchArticle()
  },
  methods: {
    // 获取文章列表
    async fetchArticle() {
      const { page, pageSize, title } = this
      const res = await fetchArticle({ page, pageSize, title })
      this.handleArticle(res.data)
    },
    // 删除文章
    async deleteArticle(row) {
      this.$confirm(`确认要删除文章"${row.title}"?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const { page, articleList } = this
          const res = await deleteArticle({ id: row._id })
          this.$message.success('删除成功')
          // 如果当前不是第一页且当前页只有一条数据
          if (page != 1 && articleList.length == 1) {
            this.page = page - 1
          }
          this.fetchArticle()
        })
        .catch((err) => {
          this.$message.info('已取消')
        })
    },
    // 页数改变时
    pageChange(currentPage) {
      this.page = currentPage
      this.fetchArticle()
    },
    // 对返回的数据处理
    handleArticle(data) {
      data.articleList.forEach((item, index) => {
        // 设置编号
        if (this.page == 1) {
          item.number = index + 1
        } else {
          item.number = (this.page - 1) * this.pageSize + (index + 1)
        }
        // 格式化日期
        item.date = dayjs(Number(item.date)).format('YYYY-MM-DD')
      })
      this.articleTotal = data.articleTotal
      this.articleList = data.articleList
    },
    // 格式化文章分类
    categoryFormat(row) {
      let ret = []
      row.categories.forEach((s) => {
        return ret.push(s.name)
      })
      return ret.join('、')
    },
  },
}
</script>

<style lang="stylus" scoped>
#article-list {
  .search {
    overflow: hidden;
    margin: 50px 0 15px 0;

    .el-input {
      float: left;
      width: 400px;
    }
  }
}
</style>
