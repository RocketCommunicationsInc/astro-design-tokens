<script setup>
import ComponentNotificationBanner from '../components/ComponentNotificationBanner.vue' 
import DesignTokenPreview from '../components/DesignTokenPreview.vue'
import { computed } from 'vue'
import mode from './.vitepress/theme/darkMode'

const tokens = computed(() => {
	return mode.tokens.filter(token => token.tokenLevel === 'component')
})

// const grouped = tokens.reduce((prev, current) => {
// 	let { component } = current
// 	component = component.replace('-',' ')
// 	let values = prev[component] || (prev[component] = []);
// 	values.push(current);
// }, {})
</script>
# Component Tokens
## Classification banner

<ComponentNotificationBanner component="classification-banner"/>

## Notification Banner
<ComponentNotificationBanner component="notification-banner"/>

## Status Symbol
<ComponentNotificationBanner component="status-symbol"/>

## Slider 
<ComponentNotificationBanner component="slider"/>

## Global Status Bar
<ComponentNotificationBanner component="gsb"/>

## Switch
<ComponentNotificationBanner component="switch"/>

## Radio
<ComponentNotificationBanner component="radio"/>

## Checkbox
<ComponentNotificationBanner component="checkbox"/>

## Tag
<ComponentNotificationBanner component="tag"/>

## Scrollbar
<ComponentNotificationBanner component="scrollbar"/>

## Progress
<ComponentNotificationBanner component="progress"/>

## Indeterminate Progress
<ComponentNotificationBanner component="indeterminate-progress"/>


## Dialog
<ComponentNotificationBanner component="dialog"/>

## Card
<ComponentNotificationBanner component="card"/>


## Container
<ComponentNotificationBanner component="container"/>