<script setup>
</script>

# Astro Design Tokens

## Introduction

### Why?

Design Tokens empower designer and developer workflows by providing answers to common questions like "what color should I use for XYZ?" Our components offer off the shelf solutions for common UI patterns, but they do not encompass the whole picture. While it is possible to build an application using nothing but Astro components, you will still need Design Tokens for things like spacing between the components themselves. In most cases, you will also need to create your own custom components. Design Tokens can help there as well.

### What are Design Tokens?

Design Tokens are design decisions that define UI elements of a Design System. They are the core of the Design System and the single source of truth. They can describe everything from color to border radii to typography and follow a consistent naming convention. Most importantly, they are platform-agnostic.

* The <span class="font-bold text-blue-600">text</span> <span class="font-bold text-blue-800">color</span> of a <span class="font-bold text-green-500">button</span> is #fffff.
* The <span class="font-bold text-blue-600">background</span> <span class="font-bold text-blue-800">color</span> for all <span class="font-bold text-blue-400">surface elements</span> is #fff.
* Our <span class="font-bold text-blue-400">base</span> <span class="font-bold text-blue-800">border radii</span> is 3px. 
* The <span class="font-bold text-blue-600">border</span> <span class="font-bold text-blue-800">color</span> for a <span class="font-bold text-green-500">text input </span>when it is <span class="font-bold text-red-400">invalid</span> is #fff.

Translated into Design Tokens becomes:

* <span class="font-bold text-green-500">button</span>-<span class="font-bold text-blue-800">color</span>-<span class="font-bold text-blue-600">text</span>
* <span class="font-bold text-blue-800">color</span>-<span class="font-bold text-blue-600">background</span>-<span class="font-bold text-blue-400">surface</span>
* <span class="font-bold text-blue-800">radius</span>-<span class="font-bold text-blue-400">base</span>
* <span class="font-bold text-green-500">input</span>-<span class="font-bold text-blue-800">color</span>-<span class="font-bold text-blue-600">border</span>-<span class="font-bold text-red-400">invalid</span>



## How Do I Use These?

Astro Design Tokens are broken down into three tiers based on their usage:

<span class="p-2 rounded text-white bg-violet-400">Reference</span> -> <span class="p-2 rounded text-white bg-violet-600">System</span> -> <span class="p-2 rounded text-white bg-violet-900">Component</span>

### Reference Tokens

`color.palette.brightblue.500`

Reference Tokens are the complete palette and include all the possible values that are available to use. They do not convey any intent or meaning.

You should available creating your own colors or values if you want to be Astro-compliant. Our color values are very carefully chosen in order to meet WCAG accessibility compliance among others.

### System Tokens

`color.background.interactive`

Reference Tokens help enforce consistency; however, the sheer number of them can be overwhelming. To aid you in determining what tokens to use, Astro offers System Tokens to better convey intent and usage. System Tokens are the preferred way of interacting with the design system. All System Tokens reference our reference tokens. They better describe overall patterns and concepts like `interactive` or `surface`.

### Component Tokens

`status-symbol-color-fill-critical`

Component Tokens are blueprints used to describe all properties of individual components. They should only be used in scenarios where you are rebuilding existing Astro components. For example:

1. Unable to use to use our Figma and Web Component libraries. For example, developing a native Windows application, designing in Adobe XD, etc.
2. Theming an existing component library or design system. For example, Bootstrap or Material.

Component tokens are scoped to individual components. They should not be used outside of the component. Instead, you should use the token that is being referenced directly. For example, don't use `button-color-background-hover` in a list component. In this scenario you would see that `button-color-background-hover` references `color.background.interactive.default` and would use the system token instead. Component tokens may change in upcoming releases and may break the visual design of your custom component if you use them.

## Common Use Cases

### I'm an designer creating a new component or piece of UI

<span class="p-2 rounded text-white bg-violet-600">System (Preferred)</span> <span class="p-2 rounded text-white bg-violet-400">Reference</span>

Start with System tokens wherever possible. If you can't find what you're looking for, drop down and use the reference tokens.

If you find yourself wanting to copy an existing component's token value for your new component, look up what that component token is referencing and use that instead.

### I'm a designer working in something that isn't Figma

<span class="p-2 rounded text-white bg-violet-900">Component</span>

Since you won't have access to our Figma component library, you'll need to create your own Astro components. You can do this using just our component tokens: `button-color-background`, `button-color-text`.

### I'm a single developer working on some new UI

<span class="p-2 rounded text-white bg-violet-600">System (Preferred)</span> <span class="p-2 rounded text-white bg-violet-400">Reference</span>

Start with System tokens wherever possible. If you can't find what you're looking for, drop down and use the reference tokens.

If you find yourself wanting to copy an existing component's token value for your new component, look up what that component token is referencing and use that instead.

### I'm a developer who can't use the Astro Web Components

<span class="p-2 rounded text-white bg-violet-900">Component</span>

Since you won't have access to our web component library, you'll need to create your own Astro components. You can do this using just our component tokens: `button-color-background`, `button-color-text`.

## Contributing

We welcome any and all feedback. If you'd like to suggest new tokens, please reach out via (TBD) with:

1. What is your proposed change?
2. Why is this change needed?

When proposing changes, consider the following naming convention:

### Naming Convention

Our design tokens follow a consistent naming convention:

<div>
	<ol class="m-0 p-0 grid grid-flow-col auto-cols-max items-center text-white">
		<li class="bg-green-600  p-4">Group</li> 
		<li class="bg-green-500 p-4">Component</li> 
		<li class="bg-green-300 p-4 text-black">Element</li> 
		<li class="bg-blue-800 p-4">Category</li> 
                <li class="bg-blue-600 p-4">Property</li> 
                <li class="bg-blue-400 p-4">Concept</li> 
		<li class="bg-red-500 p-4">Variant</li>
		<li class="bg-red-400 p-4">State</li> 
		<li class="bg-red-200 p-4 text-black">Scale</li>
      </ol>
</div>

* Group
  * Can contain multiple components
  * ie: forms
* Component
  * Component specific values that can override other token values
  * ie: our global status bar uses the same colors for both light and dark themes.
* Element
  * Sometimes components have other components within them
  * for example: `notification-banner-icon-fill-critical`
* Category
  * The backbone of all tokens. Describes what kind of value it is
  * ie: color, size, radii, opacity
* Property
  * Describes a particular type of category
  * ie: background(color), text(color), border(color), inner(shadow), outer(shadow)
* Concept
  * Describes a general, related idea.
  * ie: surface, status
* Variant
  * Used to describe different variants of a value.
  * ie: (button) secondary
* State
  * Used to describe a particular state
  * ie: hover, focus, selected
* Scale
  * Used to describe a hierarchy between values
  * ie: (color)100-900, (fontSize)sm-lg

A token may have only some of these levels and do not need to include all of them.