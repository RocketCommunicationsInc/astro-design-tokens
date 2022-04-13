<template>
	<div class="w-16 h-16 border-2 border-gray-500" :style="{ 'border-width': value }"></div>
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