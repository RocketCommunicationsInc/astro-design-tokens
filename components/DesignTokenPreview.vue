<template>
	<div class="flex align-center mt-4 mb-4">
		<div class="flex items-center w-1/6">
			<design-token-preview-color-background v-if="type === 'background' || type === 'icon' || type === 'fill' " :value="token?.value"></design-token-preview-color-background>
			<design-token-preview-color-border v-if="type === 'border'" :value="token?.value"></design-token-preview-color-border>
			<design-token-preview-color-text v-if="type === 'text'" :value="token?.value"></design-token-preview-color-text>
			<design-token-preview-text-size v-if="type === 'font-size'" :value="token?.value"></design-token-preview-text-size>
			<design-token-preview-text-weight v-if="type === 'font-weight'" :value="token?.value"></design-token-preview-text-weight>
			<design-token-preview-radius v-if="type === 'radius' || token?.category === 'borderRadius'" :value="token?.value"></design-token-preview-radius>
			<design-token-preview-shadow v-if="token.category === 'boxShadow' " :type="token.property" :value="token?.value"></design-token-preview-shadow>
		</div>
		<div class="w-full">
			<div class="flex items-center">
				<div class="text-xl font-bold w-4/7">{{ token?.name }}</div>
				<div class="ml-auto flex text-sm items-center">{{ token?.value }}</div>
			</div>
			<div class="flex ">
				<div class="w-3/5">
					<p class="m-0 ml-auto mt pb-2 text-gray-500 leading-snug" v-if="token?.description !== 'Protected'">{{ token?.description }}</p>
				</div>
				<div class="ml-auto text-gray-400">
					{{token.referenceToken}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DesignTokenPreviewColorBackground from './DesignTokenPreviewColorBackground.vue'
import DesignTokenPreviewColorText from './DesignTokenPreviewColorText.vue'
import DesignTokenPreviewColorBorder from './DesignTokenPreviewColorBorder.vue'
import DesignTokenPreviewTextSize from './DesignTokenPreviewTextSize.vue'
import DesignTokenPreviewTextWeight from './DesignTokenPreviewTextWeight.vue'
import DesignTokenPreviewRadius from './DesignTokenPreviewRadius.vue'
import DesignTokenPreviewShadow from './DesignTokenPreviewShadow.vue'
export default {
	components: { DesignTokenPreviewColorBackground, DesignTokenPreviewColorText, DesignTokenPreviewColorBorder, DesignTokenPreviewTextSize, DesignTokenPreviewTextWeight, DesignTokenPreviewRadius, DesignTokenPreviewShadow },
	props: ['token', 'name', 'value', 'type'],
}
</script>

