<script setup>
import { computed } from 'vue'
import mode from './.vitepress/theme/darkMode'
const tokens = computed(() => {
	return mode.tokens.filter(token => token.tokenLevel === 'system')
})

</script>
# System Tokens

## Color

### Background
<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'color' && token.property === 'background'" 
    type="background"
        :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
     ></rux-design-token-preview>
</div>

### Text
<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'color' && token.property === 'text'" type="text"
      :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>

### Border
<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'color' && token.property === 'border'" type="border"
      :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
   ></rux-design-token-preview>
</div>

### ----

### Status

Status colors represent the [AstroUXDS Status System](https://www.astrouxds.com/patterns/status-system/)

<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'color' && token.property === 'status'" 
  type="background" 
      :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>

### Classification

Classification colors represent the government markings and are very intentionally set. Do not use these as part of your UI.

<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'color' && token.property === 'classification'" type="background" 
      :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>