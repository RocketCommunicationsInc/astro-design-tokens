<template>
	<div class="w-16 h-16" :class="{ 'border border-2' : isWhite}" :style="{ background: value }"></div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
	},
	computed: {
		isWhite() {
			return this.value === '#ffffff'
		}
	},


}
</script>