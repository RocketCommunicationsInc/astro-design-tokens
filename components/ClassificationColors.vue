<template>
	<div>
		<div v-for="(token, index) in filteredTokens">
			<design-token-preview type="background" :token="token"></design-token-preview>
		</div>
	</div>
</template>

<script>
import data from '../dist/json/docs.json'
import DesignTokenPreview from './DesignTokenPreview.vue'
export default {
	components: { DesignTokenPreview },
	data() {
		return {
			tokens: data
		}
	},
	computed: {
		filteredTokens() {
				return data.filter(token => {
					return token.category === 'color' && token.property === 'classification' && !token.component
				})

			}
	
	},
	mounted() {
		console.log(this.tokens.color);
	},

}
</script>
