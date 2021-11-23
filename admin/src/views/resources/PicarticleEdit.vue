<template>
  <div id="picarticle-edit">
    <el-card class="box-card">
      <h1 class="title">{{ id ? '编辑' : '新建' }}图文</h1>
      <el-form label-position="right" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="model.title" placeholder="请输入图文标题"></el-input>
        </el-form-item>
        <el-form-item label="所属分类">
          <el-select v-model="model.categories" multiple placeholder="请选择">
            <el-option
              v-for="item in picarticleCate"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传日期">
          <el-date-picker
            v-model="model.date"
            type="date"
            format="yyyy 年 MM 月 dd 日"
            value-format="timestamp"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :headers="uploadHeaders"
            :on-success="picUploadSuccess"
            :before-upload="beforeUpload"
          >
            <img v-if="model.pic" :src="model.pic" class="banner" />
            <i v-else class="el-icon-plus banner-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="详情">
          <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded">
          </vue-editor>
        </el-form-item>
      </el-form>
      <div class="save">
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import {
  fetchPicarticleTwo,
  savePicarticle,
  updatePicarticle,
  uploadEditorFile,
  fetchPicarticleItem,
} from '@/api/resource'
import { VueEditor } from 'vue2-editor'
import mixins_upload from '@/assets/javascript/mixins_upload'
export default {
  name: 'picarticleEdit',
  props: ['id'],
  mixins: [mixins_upload],
  data() {
    return {
      model: {
        title: '',
        body: '',
        pic: '',
        categories: [],
        author: JSON.parse(localStorage.getItem('user'))['name'] || '',
      },
      picarticleCate: [],
    }
  },
  watch: {
    $route() {
      if (this.id) {
        this.fetchPicarticleItem()
      } else {
        this.model.title = ''
        this.model.body = ''
        this.model.categories = []
        this.model.pic = ''
        this.model.author = ''
      }
    },
  },
  mounted() {
    this.fetchPicarticleTwo()
    this.id && this.fetchPicarticleItem()
  },
  methods: {
    // 保存文章
    async save() {
      const { title, body, categories, author, pic, date } = this.model
      const id = this.id
      // 名字不能为空
      if (!title) {
        this.$message.error('图文标题不能为空')
        return
      }
      if (!categories.length) {
        this.$message.error('至少要选择一个分类')
        return
      }
      if (!date) {
        this.$message.error('上传日期不能为空')
        return
      }
      if (!body) {
        this.$message.error('图文详情不能为空')
        return
      }

      //根据id判断是新建还是编辑
      let res
      if (id) {
        res = await updatePicarticle({ id, title, body, categories, pic, date })
      } else {
        res = await savePicarticle({ title, body, author, categories, pic, date })
      }
      // 该图文已存在
      if (res.status === 1) {
        this.$message.error(res.msg)
        return
      }
      this.$message.success(res.msg)
      this.$router.push('/resource/picarticleList')
    },
    // 获取文章二级分类
    async fetchPicarticleTwo() {
      const res = await fetchPicarticleTwo()
      this.picarticleCate = res.data
    },
    // 获取文章详情
    async fetchPicarticleItem() {
      const res = await fetchPicarticleItem({ id: this.id })
      this.model = res.data
    },
    // 富文本文件上传
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData()
      formData.append('file', file)

      const res = await uploadEditorFile(formData)
      Editor.insertEmbed(cursorLocation, 'image', res.data.url)
      resetUploader()
    },
    picUploadSuccess(res) {
      this.model.pic = res.data.url
    },
  },
  components: {
    VueEditor,
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variable.styl';

#picarticle-edit {
  .box-card {
    width: 1000px;
    margin: 0 auto;
    box-shadow: none;

    .title {
      margin-bottom: 30px;
      font-size: $font-s;
    }

    .el-form-item {
      margin-bottom: 30px;
    }

    .save {
      text-align: right;
      margin-top: 30px;
    }
  }
}
</style>