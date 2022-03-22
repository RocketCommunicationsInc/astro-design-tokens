<template>
	<div>
		<div v-for="token in referenceTokens" v-if="type === 'color'">
			<design-token-preview type="background" :token="token"></design-token-preview>
		</div>

		<div v-for="token in fontSizeTokens" v-if="type === 'fontSize'">
			<design-token-preview type="font-size" :token="token"></design-token-preview>
		</div>

		<div v-for="token in fontWeightTokens" v-if="type === 'fontWeight'">
			<design-token-preview type="font-weight" :token="token"></design-token-preview>
		</div>
		<div v-for="token in radiusTokens" v-if="type === 'borderRadius'">
			<design-token-preview type="radius" :token="token"></design-token-preview>
		</div>
	</div>
</template>

<script>
import DesignTokenPreview from './DesignTokenPreview.vue'
import mode from '../docs/.vitepress/theme/darkMode'
export default {
	components: { DesignTokenPreview },
	props: ['type'],
	computed: {
		fontSizeTokens() {
			return mode.tokens.filter(token => {
				return token.category === 'fontSizes'
			})
		},
		fontWeightTokens() {
			const filter = ['body', 'heading', 'display', 'monospace']
			return mode.tokens.filter(token => {
				return token.category === 'fontWeight' && !filter.includes(token.property)
			})
		},
		radiusTokens() {
			return mode.tokens.filter(token => {
				return token.category === 'borderRadius' && !token.component
			})
		},
		referenceTokens() {
			return mode.tokens.filter(token => {
				return token.category === 'color' && token.property === 'palette'
			})
		}
	},

}
</script>
