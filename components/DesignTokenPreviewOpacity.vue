<template>
	<div class="opacity-token w-16 h-16">
		<div class="w-full h-full bg-gray-500" :style="{ 'opacity': value }"></div>
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

<style>
.opacity-token {
	background: linear-gradient(
			45deg,
			rgba(43, 40, 38, 0.1) 25%,
			transparent 0
		),
		linear-gradient(
			-45deg,
			rgba(43, 40, 38, 0.1) 25%,
			transparent 0
		),
		linear-gradient(45deg, transparent 75%, rgba(43, 40, 38, 0.1) 0),
		linear-gradient(
			-45deg,
			transparent 75%,
			rgba(43, 40, 38, 0.1) 0
		);
	background-position: 0 0, 0 6px, 6px -6px, -6px 0;
	background-size: 12px 12px;
}
</style>