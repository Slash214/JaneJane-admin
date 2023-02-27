<template>
  <el-menu
    router
    class="layout-menu"
    :default-active="activeMenu"
    :default-openeds="openeds"
  >
    <div class="logo">后台模板</div>
    <menu-item
      v-for="(item, key) in allRoutes"
      :menu="item"
      :key="key"
    ></menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import MenuItem from "./MenuItem.vue";

const route = useRoute();
const router = useRouter();

// 默认打开菜单
const openeds = ["/"];

const allRoutes = router.options.routes.filter((e) => {
  return e.path !== "/login" && e.path !== "/:pathMatch(.*)";
});

console.log(allRoutes);

const activeMenu = computed(() => {
  const { meta, path } = route;
  if (meta.activeMenu) return "/";
  else return path;
});
</script>

<style scoped lang="scss">
.layout-menu {
  width: 240px;
  height: 100%;

  .logo {
    background-color: #409eff;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 70px;
  }
}
</style>
