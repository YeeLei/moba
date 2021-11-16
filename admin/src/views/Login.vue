<template>
  <div class="login">
    <div class="form_container">
      <!-- 拼图验证码 -->
      <div class="code" v-if="flag">
        <p class="closeBtn"><i class="el-icon-close" @click="flag = !flag"></i></p>
        <slide-verify
          :l="42"
          :r="20"
          :w="450"
          :h="350"
          slider-text="向右滑动"
          @success="onSuccess"
          @fail="onFail"
          @refresh="onRefresh"
          :style="{ width: '450px' }"
          class="slide-box"
          ref="slideBlock"
          v-show="flag"
        ></slide-verify>
      </div>
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
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入邮箱"> </el-input>
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
import { login } from '@/api/adminUser'

export default {
  data() {
    return {
      flag: false,
      loading: false, // 控制登录按钮的加载动画
      ruleForm: {
        email: '',
        password: '',
      },
      rules: {
        // 表单验证规则
        email: [{ required: true, type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    // 拼图成功
    onSuccess() {
      // this.$message.success('验证成功')
      setTimeout(() => {
        this.flag = !this.flag
        this.login()
      }, 1000)
    },
    // 拼图失败
    onFail() {
      this.flag = !this.flag
      this.$message.error('验证失败,请重新验证')
      setTimeout(() => {
        this.flag = !this.flag
      }, 500)
    },
    // 拼图刷新
    onRefresh() {
      this.flag = !this.flag
      setTimeout(() => {
        this.flag = !this.flag
        this.$message.success('已刷新')
      }, 500)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 拼图出现
          this.flag = true
        }
      })
    },
    // 登录
    async login() {
      const { email, password } = this.ruleForm
      this.loading = true

      const res = await login({ email, password })
      this.loading = false
      if (res.status == 422) {
        //账号或密码错误
        this.$message.error(res.msg)
        return
      }
      localStorage.setItem('token', res.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
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

    .code {
      position: absolute;
      z-index: 100;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);

      >>> canvas {
        border-radius: 5px;
        text-shadow: 3px 5px 10px #ccc;
      }

      >>> .slide-verify-slider {
        margin-top: 0;
      }
    }
  }
}
</style>
