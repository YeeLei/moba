<template>
  <div id="video-list">
    <el-card class="box-card data-list-card">
      <div class="left">
        <i class="el-icon-document"></i>
        <span class="title">数据列表</span>
      </div>
      <div class="right">
        <el-button size="small" @click="$router.push('/resource/videoAdd')">添加</el-button>
      </div>
    </el-card>

    <div class="search">
      <el-input placeholder="搜索视频" v-model="title">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table :data="videoList" border style="width: 100%">
      <el-table-column prop="number" label="编号" width="150"> </el-table-column>
      <el-table-column prop="title" label="视频标题" width="400"> </el-table-column>
      <el-table-column prop="category" :formatter="categoryFormat" label="所属分类" width="280">
      </el-table-column>
      <el-table-column prop="date" label="创建时间" width="220" sortable> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="$router.push(`/resource/videoUpdate/${scope.row._id}`)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="deleteVideo(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="videoTotal"
        :page-size="pageSize"
        :current-page="page"
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { fetchVideo, deleteVideo, fetchVideoTwo } from '@/api/resource'
import dayjs from 'dayjs'
export default {
  name: 'VideoList',
  data() {
    return {
      videoTotal: 20,
      pageSize: 5,
      page: 1,
      videoList: [],
      title: '',
      videoCate: [],
    }
  },
  watch: {
    // 搜索框内容变化时获取数据
    title() {
      this.page = 1
      this.fetchVideo()
    },
  },
  created() {
    this.fetchVideo()
    this.fetchVideoTwo()
  },
  mounted() {
    this.id && this.fetchVideoItem()
    this.fetchVideo()
    this.fetchVideoTwo()
  },
  methods: {
    // 获取视频列表
    async fetchVideo() {
      const { page, pageSize, title } = this
      const res = await fetchVideo({ page, pageSize, title })
      this.handleVideo(res.data)
    },
    // 删除视频
    async deleteVideo(row) {
      this.$confirm(`确认要删除视频"${row.title}"?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const { page, videoList } = this
        const res = await deleteVideo({ id: row._id })
        this.$message.success('删除成功')
        // 如果当前不是第一页且当前页只有一条数据
        if (page != 1 && videoList.length == 1) {
          this.page = page - 1
        }
        this.fetchVideo()
      })
    },
    // 获取视频二级分类
    async fetchVideoTwo() {
      const res = await fetchVideoTwo()
      this.videoCate = res.data
    },
    // 页数改变时
    pageChange(currentPage) {
      this.page = currentPage
      this.fetchVideo()
    },
    // 对返回的数据处理
    handleVideo(data) {
      data.videoList.forEach((item, index) => {
        // 设置编号
        if (this.page == 1) {
          item.number = index + 1
        } else {
          item.number = (this.page - 1) * this.pageSize + (index + 1)
        }
        // 格式化日期
        item.date = dayjs(Number(item.date)).format('YYYY-MM-DD')
      })
      this.videoTotal = data.videoTotal
      this.videoList = data.videoList
    },
    // 格式化文章分类
    categoryFormat(row) {
      let name = []
      // console.log(row.category)
      this.videoCate.forEach((item) => {
        if (item._id == row.category) {
          return name.push(item.name)
        }
      })
      return name.join('、')
    },
  },
}
</script>

<style lang="stylus" scoped>
#video-list {
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
