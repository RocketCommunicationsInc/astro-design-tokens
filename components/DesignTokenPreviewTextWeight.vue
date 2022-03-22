<template>
	<div class="token-color h-16 w-16 flex items-center justify-center" :style="{ 'font-weight': value }">Aa</div>
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