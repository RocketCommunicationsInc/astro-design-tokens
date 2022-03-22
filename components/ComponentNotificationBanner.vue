<template>
	<div>
		<div v-for="token in filteredData">
		<DesignTokenPreview :type="token.property" :token="token"></DesignTokenPreview>
		</div>
	</div>
</template>

<script>
import data from '../dist/json/docs.json'
import DesignTokenPreview from './DesignTokenPreview.vue'
	export default {
    props: ["component"],
    computed: {
        filteredData() {
            return data.filter(token => {
                return token.component === this.component;
            });
        }
    },
    components: { DesignTokenPreview }
}
</script>
