<template>
    <div class="nav">
        <div class="nav-left">
            <el-icon class="pointer" size="20" @click="useStore.changeCollapse">
                <Fold v-if="!useStore.isCollapse" />
                <Expand v-if="useStore.isCollapse" />
            </el-icon>

            <el-breadcrumb class="ml20" separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="nav-right">
            <el-icon @click="OpenFullScreen" size="16" class="pointer"><FullScreen /></el-icon>
            <div class="user ml20 flex pointer">
                <el-avatar
                    src="http://thirdqq.qlogo.cn/g?b=oidb&k=REYMpW1m0CGfb5pHYeaibvQ&s=100&t=1624209837"
                ></el-avatar>
                <el-dropdown class="ml20">
                    <span class="el-dropdown-link">
                        爱呵呵
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
import { useMenuStore } from '@/store/menu'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const useStore = useMenuStore()
const route = useRoute()
const router = useRouter()

const flag = ref(false)

/**
 * 进入全屏
 */
const OpenFullScreen = () => {
    let element = document.documentElement
    document.fullscreenElement ? document.exitFullscreen() : element.requestFullscreen()
    // console.log('d', document.fullscreenElement)
}

console.log(router.options)
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
    .flex {
        @include flex(center);
    }
}
</style>
