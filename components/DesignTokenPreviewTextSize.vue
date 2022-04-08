<template>
<div class="text-center h-16 w-16 flex items-center justify-center">

	<div class=" text-black" :style="{ 'font-size': value }">Aa</div>
	</div>
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