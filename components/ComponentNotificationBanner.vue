<template>
	<div>
		<div v-for="token in filteredData">
		<DesignTokenPreview :type="token.property" :token="token"></DesignTokenPreview>
		</div>
	</div>
</template>

<script>
import mode from '../docs/.vitepress/theme/darkMode'
import DesignTokenPreview from './DesignTokenPreview.vue'
	export default {
    props: ["component"],
    computed: {
        filteredData() {
            return mode.tokens.filter(token => {
                return token.component === this.component;
            });
        }
    },
    components: { DesignTokenPreview }
}
</script>
