<template>
  <div class="login">
    <div class="form_container">
      <div class="manage_tip">
        <div class="title">
          <img src="../assets/images/logo.png" class="img" />
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          status-icon
          class="loginForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名"> </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="submit_btn"
              @click="submitForm('ruleForm')"
              :loading="loading"
              >SING IN
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/user'

export default {
  data() {
    return {
      loading: false, // 控制登录按钮的加载动画
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        // 表单验证规则
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        }
      })
    },
    // 登录
    async login() {
      const { username, password } = this.ruleForm
      this.loading = true

      const res = await login({ username, password })
      this.loading = false
      if (res.status == 422) {
        //账号或密码错误
        this.$message.error(res.msg)
        return
      }
      localStorage.setItem('token', res.token)
      this.$router.push('/home')
    },
    // 重置表单
    resetForm() {
      this.$refs['ruleForm'].resetFields()
    },
  },
}
</script>
<style lang="stylus" scoped>
>>>.el-input__suffix {
  color: #4bcd0b;
}

.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../assets/images/bg.jpg') no-repeat;
  background-size: 100% 100%;

  .form_container {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    padding: 25px;
    border-radius: 5px;
    text-align: center;

    .manage_tip {
      position: relative;
      background-color: #fff;
      box-shadow: 3px 5px 15px #ccc;
      border-radius: 5px;

      .title {
        position: absolute;
        top: 20px;
        width: 100%;
        text-align: center;
        font-family: 'Microsoft YaHei';
        font-size: 26px;
        letter-spacing: 2px;
        z-index: 10;

        .img {
          display: inline-block;
          transform: scale(0.9);
          vertical-align: middle;
        }

        span {
          display: inline-block;
          vertical-align: middle;
          margin-left: 5px;
          color: #ff6c60;
        }
      }

      .loginForm {
        margin-top: 20px;
        padding: 100px 40px 20px 0;

        .submit_btn {
          width: 100%;
          background: #facf49;
          border-color: #facf49;
        }
      }

      .tiparea {
        text-align: left;
        font-size: 12px;
        color: #4cbb15;

        .tip {
          margin-left: 54px;
        }
      }
    }
  }
}
</style>
