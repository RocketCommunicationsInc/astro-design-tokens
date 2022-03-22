<script setup>
</script>

# Astro Design Tokens

## Introduction

### What are Design Tokens?

Design Tokens are design decisions represented in a `key: value` format. They are the core of the Design System. They can describe everything from color to border radii to typography.  They follow a consistent naming convention. They give you out of the box accessibility contrast support if used properly. They translate across all platforms. 


### Why?

Our components offer off the shelf solutions for common UI patterns, but they do not encompass the whole pciture. Useful for creating your own components. Giving you the tools to create your own UIs that are consistent with the astro brand and language. 

### Naming Convention

## How Do I Use These?

Astro uses three tiers of tokens.

### Reference Tokens

Reference Tokens are all the possible values that are available to use. You MUST not create your own colors. 

* Internal Designers. 
* Developing new components.

### System Tokens

System Tokens are the preferred way of interacting with the design system. They include content and meaning. All system tokens reference our reference tokens. 

### Component Tokens

Component Tokens are used to describe the properties of individual components. They SHOULD NOT be used externally unless you are 

1. Unable to use to use our Figma and Web Component libraries
2. Creating your own library
   1. Windows App/QT
   2. Themeing Bootstrap/Material


Component tokens are scoped to individual components. Useful for theme or mode switching.