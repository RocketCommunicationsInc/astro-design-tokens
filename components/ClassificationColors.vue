<template>
	<div>
		<div v-for="(token, index) in filteredTokens">
			<design-token-preview type="background" :token="token"></design-token-preview>
		</div>
	</div>
</template>

<script>
import mode from '../docs/.vitepress/theme/darkMode'
import DesignTokenPreview from './DesignTokenPreview.vue'
export default {
	components: { DesignTokenPreview },
	computed: {
		filteredTokens() {
				return mode.tokens.filter(token => {
					return token.category === 'color' && token.property === 'classification' && !token.component
				})

			}
	
	},

}
</script>
