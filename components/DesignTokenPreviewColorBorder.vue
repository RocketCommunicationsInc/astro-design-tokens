<template>
	<div class="token-color h-16 w-16 border-2" :style="{ 'border-color': value }"></div>
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
.token-color {
}
</style>