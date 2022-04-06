<template>
	<div class=" text-black" :style="{ 'font-size': value }">Aa</div>
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