<template>
  <div id="picarticle-list">
    <el-card class="box-card data-list-card">
      <div class="left">
        <i class="el-icon-document"></i>
        <span class="title">数据列表</span>
      </div>
      <div class="right">
        <el-button size="small" @click="$router.push('/resource/picarticleAdd')">添加</el-button>
      </div>
    </el-card>

    <div class="search">
      <el-input placeholder="搜索图文" v-model="title">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <el-table :data="picarticleList" border style="width: 100%">
      <el-table-column prop="number" label="编号" width="70"> </el-table-column>
      <el-table-column prop="title" label="图文标题" width="500"> </el-table-column>
      <el-table-column prop="categories" :formatter="categoryFormat" label="所属分类" width="280">
      </el-table-column>
      <el-table-column prop="date" label="上传时间" width="220" sortable> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="$router.push(`/resource/picarticleUpdate/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="deletePicarticle(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="picarticleTotal"
        :page-size="pageSize"
        :current-page="page"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { fetchPicarticle, deletePicarticle } from '@/api/resource'
import dayjs from 'dayjs'
export default {
  name: 'picarticleList',
  data() {
    return {
      picarticleTotal: 20,
      pageSize: 5,
      page: 1,
      picarticleList: [],
      title: '',
    }
  },
  watch: {
    // 搜索框内容变化时获取数据
    title() {
      this.page = 1
      this.fetchPicarticle()
    },
  },
  mounted() {
    this.fetchPicarticle()
  },
  methods: {
    // 获取文章列表
    async fetchPicarticle() {
      const { page, pageSize, title } = this
      const res = await fetchPicarticle({ page, pageSize, title })
      this.handlePicarticle(res.data)
    },
    // 删除文章
    async deletePicarticle(row) {
      this.$confirm(`确认要删除图文"${row.title}"?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const { page, articleList } = this
          const res = await deletePicarticle({ id: row._id })
          this.$message.success('删除成功')
          // 如果当前不是第一页且当前页只有一条数据
          if (page != 1 && articleList.length == 1) {
            this.page = page - 1
          }
          this.handlePicarticle()
        })
        .catch((err) => {
          this.$message.info('已取消')
        })
    },
    // 页数改变时
    pageChange(currentPage) {
      this.page = currentPage
      this.fetchPicarticle()
    },
    // 对返回的数据处理
    handlePicarticle(data) {
      data.picarticleList.forEach((item, index) => {
        // 设置编号
        if (this.page == 1) {
          item.number = index + 1
        } else {
          item.number = (this.page - 1) * this.pageSize + (index + 1)
        }
        // 格式化日期
        item.date = dayjs(Number(item.date)).format('YYYY-MM-DD')
      })
      this.picarticleTotal = data.picarticleTotal
      this.picarticleList = data.picarticleList
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
#picarticle-list {
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
