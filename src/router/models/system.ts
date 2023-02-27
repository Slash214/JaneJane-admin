import { RouteRecordRaw } from "vue-router";

const System: Array<RouteRecordRaw> = [
	{
		path: '/login',
		name: '登陆',
		meta: { title: '后台登陆' },
		component: () => import('views/login/index.vue')
	},
	{
		path: '/404',
		meta: { title: '404', icon: 'icon-jinggao' },
		component: () => import("views/system/404.vue")
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/404'
	}
]

export default System