<template>
  <div class="nav">
    <div class="nav-left">
      <el-icon size="20" :color="'#dddbbb'" @click="useStore.changeCollapse">
        <Fold v-if="!useStore.isCollapse" />
        <Expand v-if="useStore.isCollapse" />
      </el-icon>

      <el-breadcrumb class="ml20" :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="nav-right">

      <div class="user ml20">
        <el-avatar src=""></el-avatar>
        <el-dropdown class="ml10">
          <span class="el-dropdown-link">
            Admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowDown, Fold, Expand } from "@element-plus/icons-vue";
import { useMenuStore } from "@/store/menu";
import { useRoute, useRouter } from "vue-router";

const useStore = useMenuStore();
const route = useRoute();
const router = useRouter();


console.log(router.options);
</script>

<style scoped lang="scss">
$height: 70px;
.nav {
  @include flex(center, space-between);
  height: $height;
  .nav-left {
    @include flex(center);
  }
  .nav-right {
    @include flex(center);
  }
}
</style>
