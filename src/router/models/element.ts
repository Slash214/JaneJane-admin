/**
 * @author 爱呵呵
 * @description 组件路由模块
 */

import { RouteRecordRaw } from "vue-router";
import layout from '@/layout/index.vue'

const Elements: Array<RouteRecordRaw> = [
	{
		path: '/elements',
		component: layout,
		meta: { title: '组件', icon: 'Grid', activeMenu: true },
		redirect: '/elements/richtext',
		children: [
			{
				path: '/richtext',
				name: '富文本',
				meta: { title: '富文本', keepAlive: false, icon: 'Box' },
				component: () => import('views/element/richtext.vue')
			},
			{
				path: '/table',
				name: '表格',
				meta: { title: '表格', keepAlive: false, icon: 'Document' },
				component: () => import('views/element/table.vue')
			}
		]
	},
]

export default Elements