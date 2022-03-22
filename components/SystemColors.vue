<template>
	<div>
		<div v-for="(token, index) in filteredTokens">
			<design-token-preview :type="type" :token="token"></design-token-preview>
		</div>
	</div>
</template>

<script>
import newData from '../docs.json'
import DesignTokenPreview from './DesignTokenPreview.vue'
export default {
	props: ['type'],
	components: { DesignTokenPreview },
	data() {
		return {
			tokens: newData
		}
	},
	computed: {

			filteredTokens() {
				return newData.filter(token => {
					return token.category === 'color' && token.property === this.type && !token.component
				})

			},
		referenceTokens() {

			const filtered = Object.fromEntries(
				Object.entries(this.tokens).filter(
					([key, val]) => key.startsWith('color-border')
				)
			);

			return filtered
		}
	},
	mounted() {
	},

}
</script>
