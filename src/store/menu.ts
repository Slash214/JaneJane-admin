import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMenuStore = defineStore('menu', () => {
	const isCollapse = ref(true)

	function changeCollapse() {
		isCollapse.value = !isCollapse.value
	}

	return { isCollapse, changeCollapse }
})