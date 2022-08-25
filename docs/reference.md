<script setup>
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
  <rux-design-token-preview 
    v-if="token.category === 'color' && token.property === 'palette'" 
    type="background" 
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>

## Font Size
<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'fontSizes'" type="font-size" 
      :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>

## Font Weight
<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'fontWeight'" type="font-weight" 
      :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>

## Radii
<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'borderRadius'" type="radius" 
      :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>


## Opacity

<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'opacity'" 
   type="opacity"
       :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
   ></rux-design-token-preview>
</div>

## Border Width

<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'borderWidth'" type="border-width"
        :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>

## Spacing
<div v-for="token in sortedSpacingTokens">
  <rux-design-token-preview v-if="token.category === 'spacing'" type="spacing" 
      :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>


## Line Heights
<div v-for="token in tokens">
  <rux-design-token-preview v-if="token.category === 'lineHeights'" type="line-height"
      :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
  ></rux-design-token-preview>
</div>