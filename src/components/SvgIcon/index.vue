<template>
	<svg class="svg-icon" :style="{ fontSize: props.size + 'px'}" aria-hidden="true">
	   <use :href="`#${props.name}`"></use>
	</svg>
</template>

<script setup lang="ts">
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	size: {
		type: String,
		default: '100'
	}
})

</script>

<style scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	vertical-align: -0.15em;
	fill: white;
	overflow: hidden;
}
</style>