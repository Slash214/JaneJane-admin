<template>
  <el-sub-menu
    v-if="props.menu?.children?.length > 1"
    :index="menu.path"
    :show-timeout="0"
    :hide-timeout="0"
  >
    <template #title>
      <svg-icon v-if="menu.meta.icon" :name="menu.meta.icon" size="24">
      </svg-icon>
      <span class="ml20">{{ menu.meta.title }}</span>
    </template>
    <menu-item
      v-for="(val, index) of props.menu?.children"
      :menu="val"
      :key="index"
    ></menu-item>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <svg-icon v-if="menu.meta.icon" :name="menu.meta.icon" size="24">
    </svg-icon>
    <template #title>
      <span class="ml20">{{ menu.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<script setup lang="ts">
const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.ml20 {

	margin-left: 10px;
}
</style>
