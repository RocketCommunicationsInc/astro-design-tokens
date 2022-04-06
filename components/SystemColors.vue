<template>
	<div>
		<div v-for="(token, index) in filteredTokens">
			<design-token-preview :type="type" :token="token"></design-token-preview>
		</div>
	</div>
</template>

<script setup>
import DesignTokenPreview from './DesignTokenPreview.vue'
import { computed } from 'vue'
import mode from '../docs/.vitepress/theme/darkMode'
const props = defineProps({
	type: String
})
const filteredTokens = computed(() => {
	return mode.tokens.filter(token => {
		return token.category === 'color' && token.property === props.type && !token.component
	})
})




// export default {

// 	props: ['type'],
// 	components: { DesignTokenPreview },
// 	computed: {

// 			
// 	},

// }
</script>
