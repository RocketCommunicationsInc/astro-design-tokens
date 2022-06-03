<template>
		<div class="w-full h-full mr-4 bg-gray-500" :style="{ 'width': value, 'height': '20px' }"></div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
	},

}
</script>

<style>
</style>