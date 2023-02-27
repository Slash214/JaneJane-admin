<template>
  <el-container class="layout">
    <el-aside><menus></menus></el-aside>
    <el-container class="main">
      <el-header>顶部</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import menus from './menus/index.vue'
</script>

<style scoped lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .el-aside {
    width: 240px;
    color: #fff;
  }

  .main {
    .el-header {
      width: 100%;
      height: 70px;
      line-height: 70px;
      background-color: #fff;
    }

    .el-main {
      min-height: 80vh;
    }
  }
}
</style>
