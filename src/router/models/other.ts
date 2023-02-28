import { RouteRecordRaw } from "vue-router";
import layout from '@/layout/index.vue'

const Other: Array<RouteRecordRaw> = [
	{
		path: '/other',
		component: layout,
		meta: { title: '其他', icon: 'Menu', activeMenu: true },
		redirect: '/other/test',
		children: [
			{
				path: '/test',
				name: '测试',
				meta: { title: '测试', keepAlive: false },
				component: () => import('views/other/test.vue')
			},
			{
				path: '/test1',
				name: '测试2',
				meta: { title: '测试', keepAlive: false },
				component: () => import('views/other/test.vue')
			}
		]
	},
]

export default Other