<template>
	<div
		class="text-xl token-text-color text-black h-16 w-16 flex items-center text-center justify-center"
		:class="{ 'is-dark': isDark(value) }"
		:style="{ 'color': value }"
	>Aa</div>
</template>

<script>
import Color from 'color'
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
	},
	methods: {
		isDark(hex) {
			// return Color(hex).isDark()
			return true

		}
	},

}
</script>

<style>
.is-dark {
	background: transparent !important;
}
.token-text-color {
	background: #1b2d3e;
}
</style>