<template>
  <div id="store-edit">
    <el-card class="box-card">
      <h1 class="title">{{ id ? '编辑' : '新建' }}装备</h1>
      <el-select v-model="model.category" placeholder="请选择">
        <el-option v-for="item in storeCate" :key="item._id" :label="item.name" :value="item._id">
        </el-option>
      </el-select>
      <el-input
        v-model="model.name"
        placeholder="请输入装备名称"
        @keydown.native.enter="save"
      ></el-input>
      <el-input
        v-model="model.attr"
        placeholder="请输入装备属性描述 (xxx;xxx;xxx;)"
        @keydown.native.enter="save"
      ></el-input>
      <el-input
        v-model="model.desc"
        type="textarea"
        :rows="3"
        placeholder="请输入装备描述"
        @keydown.native.enter="save"
      ></el-input>
      <el-upload
        class="avatar-uploader"
        :action="uploadUrl"
        :show-file-list="false"
        :headers="uploadHeaders"
        :on-success="uploadSuccess"
        :before-upload="beforeUpload"
      >
        <img v-if="model.icon" :src="model.icon" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="save">
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { fetchEquipTwo, saveEquip, updateEquip, getEquipItem } from '@/api/goods'
import mixins_upload from '@/assets/javascript/mixins_upload'
export default {
  name: 'EquipEdit',
  mixins: [mixins_upload],
  props: ['id'],
  data() {
    return {
      model: {
        name: '',
        icon: '',
        attr: '',
        desc: '',
        category: '',
      },
      storeCate: [],
    }
  },
  watch: {
    $route() {
      if (this.id) {
        this.getEquipItem()
      } else {
        this.model.name = ''
        this.model.icon = ''
        this.model.attr = ''
        this.model.desc = ''
        this.model.category = ''
      }
    },
  },
  mounted() {
    this.fetchEquipTwo()
    this.id && this.getEquipItem()
  },
  methods: {
    // 保存符文
    async save() {
      let { name, icon, attr, desc, category } = this.model
      const id = this.id
      if (!name || !icon || !category || !attr) {
        this.$message.error('请将信息填写完整')
        return
      }
      if (!/^([^;]{1,};){1,4}$/.test(attr)) {
        this.$message.error('装备属性不符合规则 (x;x;x;x;)')
        return
      }
      // 将属性字符串分割成字符串数组存储
      attr = attr.split(';')
      attr.pop()

      //根据id判断是新建还是编辑
      let res
      if (id) {
        res = await updateEquip({ id, name, icon, attr, desc, category })
      } else {
        res = await saveEquip({ name, icon, attr, desc, category })
      }
      // 该符文已存在
      if (res.status == 1) {
        this.$message.error(res.msg)
        return
      }
      this.$message.success(res.msg)
      this.$router.push('/goods/equipList')
    },
    // 获取符文二级分类
    async fetchEquipTwo() {
      const res = await fetchEquipTwo()
      this.storeCate = res.data
    },
    // 获取符文详情
    async getEquipItem() {
      const res = await getEquipItem({ id: this.id })
      let attrStr = ''
      res.data.attr.forEach((item) => {
        attrStr += item + ';'
      })
      this.model.name = res.data.name
      this.model.icon = res.data.icon
      this.model.attr = attrStr
      this.model.desc = res.data.desc
      this.model.category = res.data.category
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variable.styl';

#store-edit {
  .box-card {
    width: 700px;
    box-shadow: none;

    .title, .el-select, .el-input {
      margin-bottom: 30px;
    }

    .title {
      font-size: $font-s;
    }

    .el-input {
      width: 80%;
    }

    .el-textarea {
      margin-bottom: 30px;
    }

    .save {
      margin-top: 30px;
    }
  }
}
</style>
