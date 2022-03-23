<template>
	<div class="w-16 h-16 border-2 border-gray-500" :style="style"></div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'inner'
		}
	},
	computed: {
		style() {
			if (this.type === 'inner') {
				return `box-shadow: inset ${this.value}`
			}

			if (this.type === 'outer') {
				return `box-shadow: ${this.value}`
			}
		}
	},
	methods: {
		getStyle() {


		}
	},

}
</script>