<script setup>
import ReferenceTokens from '../components/ReferenceTokens.vue'
import DesignTokenPreview from '../components/DesignTokenPreview.vue'
import { computed } from 'vue'
import mode from './.vitepress/theme/darkMode'

const tokens = computed(() => {
	return mode.tokens.filter(token => token.tokenLevel === 'reference')
})

const sortedSpacingTokens = computed(() => {
  return tokens.value.filter(token => token.category === 'spacing').sort((a, b) => {
    return a.value.replace('rem','') - b.value.replace('rem','')
  })
})

</script>
# Reference Tokens
## Color
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'color' && token.property === 'palette'" type="background" :token="token"></design-token-preview>
</div>

## Font Size
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'fontSizes'" type="font-size" :token="token"></design-token-preview>
</div>

## Font Weight
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'fontWeight'" type="font-weight" :token="token"></design-token-preview>
</div>

## Radii
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'borderRadius'" type="radius" :token="token"></design-token-preview>
</div>


## Opacity
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'opacity'" type="opacity" :token="token"></design-token-preview>
</div>

## Border Width
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'borderWidth'" type="opacity" :token="token"></design-token-preview>
</div>

## Spacing
<div v-for="token in sortedSpacingTokens">
  <design-token-preview v-if="token.category === 'spacing'" type="spacing" :token="token"></design-token-preview>
</div>


## Line Heights
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'lineHeights'" type="lineHeight" :token="token"></design-token-preview>
</div>