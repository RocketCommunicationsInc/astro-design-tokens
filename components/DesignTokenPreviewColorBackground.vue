<template>
	<div class="w-16 h-16" :style="{ background: value }"></div>
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