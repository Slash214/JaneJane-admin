<template>
    <el-menu
        router
        class="layout-menu"
        :style="{ width: useStore.isCollapse ? '70px' : '240px' }"
        :default-active="activeMenu"
        :default-openeds="openeds"
        :collapse="useStore.isCollapse"
        :collapse-transition="false"
    >
        <div class="logo">后台模板</div>
        <menu-item v-for="(item, key) in allRoutes" :menu="item" :key="key"></menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MenuItem from './MenuItem.vue'
import { useMenuStore } from '@/store/menu'

const route = useRoute()
const router = useRouter()
const useStore = useMenuStore()

// 默认打开菜单
const openeds = ['/']

const allRoutes = router.options.routes.filter(e => {
    return e.path !== '/login' && e.path !== '/:pathMatch(.*)'
})
console.log(allRoutes)

const activeMenu = computed(() => {
    const { meta, path } = route
    if (meta.activeMenu) return '/'
    else return path
})
</script>

<style scoped lang="scss">
$width: 240px;
$widths: 100px;
.layout-menu {
    height: 100%;
    border: none;
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
