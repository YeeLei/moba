<template>
  <div id="user-edit">
    <el-card class="box-card">
      <h1 class="title">{{ id ? '编辑' : '新建' }}管理员</h1>
      <el-input
        v-model="model.email"
        placeholder="请输入邮箱"
        @keydown.native.enter="save"
      ></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="model.password"
        @keydown.native.enter="save"
        show-password
      ></el-input>
      <el-input type="text" v-model="model.name" placeholder="请输入名字"></el-input>
      <el-upload
        class="avatar-uploader"
        :action="uploadUrl"
        :show-file-list="false"
        :headers="uploadHeaders"
        :on-success="onSuccess"
      >
        <img v-if="model.avatar" :src="model.avatar" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <div class="save">
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { saveUser, updateUser, fetchUserItem } from '@/api/adminUser'
import mixins_upload from '@/assets/javascript/mixins_upload'

export default {
  name: 'UserEdit',
  mixins: [mixins_upload],
  props: ['id'],
  data() {
    return {
      model: {
        email: '',
        password: '',
        name: '',
        avatar: '',
      },
    }
  },
  watch: {
    $route() {
      if (this.id) {
        this.getUserItem()
      } else {
        this.model.email = ''
        this.model.password = ''
        this.model.name = ''
        this.model.avatar = ''
      }
    },
  },
  mounted() {
    this.id && this.getUserItem()
  },
  methods: {
    // 保存管理员
    async save() {
      const { email, password, name, avatar } = this.model

      const id = this.id
      if (!email) {
        this.$message.error('邮箱不能为空')
        return
      }
      if (!password) {
        this.$message.error('密码不能为空')
        return
      }
      if (!name) {
        this.$message.error('名字不能为空')
        return
      }
      if (!avatar) {
        this.$message.error('请上传头像')
        return
      }
      //根据id判断是新建还是编辑
      let res
      if (id) {
        res = await updateUser({ id, email, password, name, avatar })
      } else {
        res = await saveUser({ email, password, name, avatar })
      }
      // 该管理员已存在
      if (res.status == 1) {
        this.$message.error(res.msg)
        return
      }
      this.$message.success(res.msg)
      this.$router.push('/system/userList')
    },
    // 获取管理员详情
    async getUserItem() {
      let res
      try {
        res = await fetchUserItem({ id: this.id })
      } catch (err) {
        this.model.email = 'user-find-error'
        this.model.password = ''
        this.model.name = ''
        this.model.avatar = ''
      }
      this.model.email = res.data.email
      this.model.password = ''
      this.model.name = res.data.name
      this.model.avatar = res.data.avatar
    },
    onSuccess(res) {
      this.model.avatar = res.data.url
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/variable.styl';

#user-edit {
  .box-card {
    width: 520px;
    box-shadow: none;

    .title, .el-input {
      margin-bottom: 30px;
    }

    .title {
      font-size: $font-s;
    }

    .el-input {
      width: 70%;
    }

    .save {
      margin-top: 10px;
    }
  }
}
</style>
