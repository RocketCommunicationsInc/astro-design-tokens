<script setup>
import { computed } from 'vue'
import mode from './.vitepress/theme/darkMode'

const tokens = computed(() => {
	return mode.tokens.filter(token => token.tokenLevel === 'component')
})
 
 const filterByName = (name) => {
	return tokens.value.filter((token) => token.component === name);
 }

const lookupProperty = (category, property = null) => {
    if (category === "boxShadow") {
      return "shadow";
    }

    if (category === "borderRadius") {
      return "radius";
    }

    if (property === "fill" || property === "icon") {
      return "background";
    }

    // TODO fix in transformer
    if (property === "on-dark" || property === "on-light") {
      return "border-width";
    }

    return property;
}

// const grouped = tokens.reduce((prev, current) => {
// 	let { component } = current
// 	component = component.replace('-',' ')
// 	let values = prev[component] || (prev[component] = []);
// 	values.push(current);
// }, {})
</script>
# Component Tokens


## Classification banner


<rux-design-token-preview 
	v-for="token in filterByName('classification-banner')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Notification Banner
<rux-design-token-preview 
	v-for="token in filterByName('notification-banner')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Status Symbol
<rux-design-token-preview 
	v-for="token in filterByName('status-symbol')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Slider 
<rux-design-token-preview 
	v-for="token in filterByName('slider')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Global Status Bar
<rux-design-token-preview 
	v-for="token in filterByName('gsb')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Switch

<rux-design-token-preview 
	v-for="token in filterByName('switch')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Radio
<rux-design-token-preview 
	v-for="token in filterByName('radio')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Checkbox
<rux-design-token-preview 
	v-for="token in filterByName('checkbox')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Tag
<rux-design-token-preview 
	v-for="token in filterByName('tag')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Scrollbar
<rux-design-token-preview 
	v-for="token in filterByName('scrollbar')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Progress
<rux-design-token-preview 
	v-for="token in filterByName('progress')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Indeterminate Progress
<rux-design-token-preview 
	v-for="token in filterByName('indeterminate-progress')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>


## Dialog
<rux-design-token-preview 
	v-for="token in filterByName('dialog')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>

## Card
<rux-design-token-preview 
	v-for="token in filterByName('card')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>


## Container
<rux-design-token-preview 
	v-for="token in filterByName('container')"
    :value="token.value"
    :alias="token.alias"
    :description="token.description"
    :name="token.name"
	:type="lookupProperty(token.category, token.property)"
></rux-design-token-preview>