const prefix = 'LoveHeHe_' // 项目前缀名

export const Storage = {
	setItem: (key: string, value: any, days: number = 1) => {
		let expires = new Date().getTime() + days * 24 * 60 * 60 * 1000
		
		window.localStorage.setItem(
			prefix + key,
			JSON.stringify({
				value,
				expires
			})
		)
	},
	getItem: (key: string) => {
		let item: any = window.localStorage.getItem(prefix + key)
		if (item === null || Date.now() > JSON.parse(item)?.expires) {
			// log 不存在缓存或已过期了
			return null
		}

		return JSON.parse(item)?.value
	},
	removeItem: (key: string) => {
		window.localStorage.removeItem(prefix + key)
	},
	clearAll: () => {
		window.localStorage.clear()
	}
}