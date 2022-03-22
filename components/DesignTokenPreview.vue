<template>
	<div class="flex align-center mt-4 mb-4">
		<div class="flex items-center w-1/6">
			<design-token-preview-color-background v-if="type === 'background' || type === 'icon' || type === 'fill' " :value="token?.value"></design-token-preview-color-background>
			<design-token-preview-color-border v-if="type === 'border'" :value="token?.value"></design-token-preview-color-border>
			<design-token-preview-color-text v-if="type === 'text'" :value="token?.value"></design-token-preview-color-text>
			<design-token-preview-text-size v-if="type === 'font-size'" :value="token?.value"></design-token-preview-text-size>
			<design-token-preview-text-weight v-if="type === 'font-weight'" :value="token?.value"></design-token-preview-text-weight>
			<design-token-preview-radius v-if="type === 'radius' || token?.category === 'borderRadius'" :value="token?.value"></design-token-preview-radius>
		</div>
		<div class="w-full">
			<div class="flex items-center">
				<div class="text-xl font-bold w-4/5">{{ token?.name }}</div>
				<div class="ml-auto mr-4 flex items-center">{{ token?.value }}</div>
			</div>
			<div class="flex items-center">
				<div class="w-4/5">
					<p class="m-0 mt pb-2 text-gray-500 leading-snug">{{ token?.description }}</p>
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
export default {
	components: { DesignTokenPreviewColorBackground, DesignTokenPreviewColorText, DesignTokenPreviewColorBorder, DesignTokenPreviewTextSize, DesignTokenPreviewTextWeight, DesignTokenPreviewRadius },
	props: ['token', 'name', 'value', 'type'],

}
</script>

