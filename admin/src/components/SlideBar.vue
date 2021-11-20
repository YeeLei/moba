<template>
  <div id="slide-bar">
    <el-menu
      router
      text-color="#bfcbd9"
      background-color="#304156"
      active-text-color="#409eff"
      :unique-opened="true"
      :default-active="$route.path"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-copy-document"></i>
          <span slot="title">分类管理</span>
        </template>
        <el-menu-item-group title="分类">
          <el-menu-item index="/system/cateAdd">新建分类</el-menu-item>
          <el-menu-item index="/system/cateList">分类列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span slot="title">物品管理</span>
        </template>
        <el-menu-item-group title="装备">
          <el-menu-item index="/goods/equipAdd">新建装备</el-menu-item>
          <el-menu-item index="/goods/equipList">装备列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="铭文">
          <el-menu-item index="/goods/storeAdd">新建铭文</el-menu-item>
          <el-menu-item index="/goods/storeList">铭文列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">资源管理</span>
        </template>
        <el-menu-item-group title="文章">
          <el-menu-item index="/resource/articleAdd">新建文章</el-menu-item>
          <el-menu-item index="/resource/articleList">文章列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="图文">
          <el-menu-item index="/resource/picarticleAdd">新建图文</el-menu-item>
          <el-menu-item index="/resource/picarticleList">图文列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="视频">
          <el-menu-item index="/resource/videoAdd">新建视频</el-menu-item>
          <el-menu-item index="/resource/videoList">视频列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span slot="title">英雄管理</span>
        </template>
        <el-menu-item-group title="英雄">
          <el-menu-item index="/hero/heroAdd">新建英雄</el-menu-item>
          <el-menu-item index="/hero/heroList">英雄列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span slot="title">运营管理</span>
        </template>
        <el-menu-item-group title="广告位">
          <el-menu-item index="/system/adsAdd">新建广告位</el-menu-item>
          <el-menu-item index="/system/adsList">广告位列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item-group title="管理员">
          <el-menu-item index="/system/userAdd">新建管理员</el-menu-item>
          <el-menu-item index="/system/userList">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/variable.styl';

#slide-bar {
  .el-menu {
    border: none;
  }

  .el-menu i[class^='el-icon'] {
    color: $colorD;
    margin-right: 10px;
  }

  .el-menu .el-menu-item.is-active i[class^='el-icon'] {
    color: $colorB;
  }

  .el-menu .el-menu-item.is-active.github-link i[class^='el-icon'] {
    color: $colorD !important;
  }
}
</style>
