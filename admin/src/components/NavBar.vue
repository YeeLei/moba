<template>
  <div id="nav-bar">
    <div class="fold-icon-wrap"
         @click="toggleMenuCollapse">
      <i class="el-icon-s-unfold"
         v-if="!isCollapse"></i>
      <i class="el-icon-s-fold"
         v-if="isCollapse"></i>
    </div>

    <bread-crumb @hideAvatar="isAvatar = false"
                 @showAvatar="isAvatar = true"></bread-crumb>

    <div class="dropdown-wrap"
         v-if="isAvatar">
      <el-dropdown trigger="click"
                   @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar shape="square"
                     size="medium"
                     :src="user.avatar"></el-avatar>
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="info">个人信息</el-dropdown-item>
          <el-dropdown-item :divided="true"
                            command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="user">
      <div class="userinfo">
        <div class="welcome">
          <span class="name comename">Hi,</span>
          <span class="name avatarname">{{ user.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'

export default {
  props: ['mobile'],
  name: 'NavBar',
  data () {
    return {
      user: {},
      isAvatar: true, // 控制头像的显示
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    },
  },
  methods: {
    // 侧边栏折叠切换
    toggleMenuCollapse () {
      // 如果当前屏幕宽度 < 768(参考 bootstrap 移动设备)
      if (this.mobile) {
        this.$store.dispatch('toggleCollapse', false)
        this.$emit('openMenu')
        return
      }
      this.$store.dispatch('toggleCollapse', !this.isCollapse)
    },
    // 点击菜单项触发事件
    handleCommand (command) {
      const id = this.user._id
      command === 'logout' ? this.logout() : this.$router.push(`/system/userUpdate/${id}`)
    },
    // 退出登录
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/login')
    },
  },
  components: {
    BreadCrumb,
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/variable.styl'
#nav-bar
  height 50px
  .fold-icon-wrap
    float left
    i[class^='el-icon']
      width 20px
      height 20px
      font-size $font-sm
      cursor pointer
  .user
    float right
    height 50px
    padding-right 10px
    .userinfo
      width 100%
      line-height 50px
      text-align right
      .welcome
        display inline-block
        width auto
        line-height 50px
        height 50px
        padding 0 5px
        .comename
          font-size $font-xs
          margin-right 5px
        .avatarname
          color #409eff
          font-weight bolder
      .name
        line-height 20px
        text-align center
        font-size 13px
  .dropdown-wrap
    float right
    height 50px
    cursor pointer
    .el-dropdown-link
      display flex
      align-items center
      height 50px
      i[class^='el-icon']
        position relative
        top 8px
    .el-avatar--square
      border-radius 10px
      margin-right 10px
</style>
