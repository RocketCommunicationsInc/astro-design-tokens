<script setup>
import DesignTokenPreview from '../components/DesignTokenPreview.vue'
import mode from './.vitepress/theme/darkMode'
const tokens = mode.tokens.filter(token => token.tokenLevel === 'system')

</script>
# System Tokens

## Color

### Background
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'color' && token.property === 'background'" type="background" :token="token"></design-token-preview>
</div>

### Text
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'color' && token.property === 'text'" type="text" :token="token"></design-token-preview>
</div>

### Border
<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'color' && token.property === 'border'" type="border" :token="token"></design-token-preview>
</div>

### ----

### Status

Status colors represent the [AstroUXDS Status System](https://www.astrouxds.com/patterns/status-system/)

<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'color' && token.property === 'status'" type="background" :token="token"></design-token-preview>
</div>

### Classification

Classification colors represent the government markings and are very intentionally set. Do not use these as part of your UI.

<div v-for="token in tokens">
  <design-token-preview v-if="token.category === 'color' && token.property === 'classification'" type="background" :token="token"></design-token-preview>
</div>