<script setup>
</script>

# Astro Design Tokens

## Introduction

### What are Design Tokens?

Design Tokens are design decisions represented in a `key: value` format. They are the core of the Design System. They can describe everything from color to border radii to typography.  They follow a consistent naming convention. They give you out of the box accessibility contrast support if used properly. They translate across all platforms.


### Why?

Design Tokens empower designer and developer workflows by providing answers to common questions like "what color should I use for XYZ?" Our components offer off the shelf solutions for common UI patterns, but they do not encompass the whole picture. While it is possible to build an application using nothing but Astro components, you will still need Design Tokens for things like spacing between the components themselves. In most cases, you will also need to create your own custom components. Design Tokens can help there as well.

## How Do I Use These?
### Reference Tokens

Reference Tokens are the complete palette and include all the possible values that are available to use. They do not convey any intent or meaning.

You **must** not create your own colors.

### System Tokens

Reference Tokens help enforce consistency; however, the sheer number of them can be overwhelming. To aid you in determining what tokens to use, Astro offers System Tokens to better convey intent and usage. System Tokens are the preferred way of interacting with the design system. All System Tokens reference our reference tokens. They better describe overall patterns and concepts like `interactive` or `surface`.

### Component Tokens

Component Tokens are blueprints used to describe all properties of individual components. They should only be used in scenarios where you are rebuilding existing Astro components. For example:

1. Unable to use to use our Figma and Web Component libraries. For example, developing a native Windows application, designing in Adobe XD, etc.
2. Theming an existing component library or design system. For example, Bootstrap or Material.

Component tokens are scoped to individual components. They should not be used outside of the component. Instead, you should use the token that is being referenced directly. For example, don't use `button-color-background-hover` in a list component. In this scenario you would see that `button-color-background-hover` references `color.background.interactive.default` and use the system token instead.
