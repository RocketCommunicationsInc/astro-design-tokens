<template>
	<div>
		ok
		<slot></slot>
	</div>
</template>

<script>
import data from '../dist/json/docs.json'
	export default {
		props: ['component'],
		computed: {
			filteredData() {
				return this.data 
			}
		},
	}
</script>
