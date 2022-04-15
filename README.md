# Astro UXDS Design Tokens

This package includes all of [AstroUXDS's](https://www.astrouxds.com/) design tokens in various different formats for you to consume in your applications.

## Installation

`npm i @astrouxds/design-tokens`

### CSS Custom Properties

`@import "node_modules/@astrouxds/design-tokens/dist/css/index.css";`

## Pipeline

graph TD
    A[Figma] --> B(data/tokens.json)
    B -->|Token Transformer| D["/tokens/*.json"]
    D -->|Style Dictionary| E["/dist"]
    E -->F[CSS]
    E -->G[SASS]
    E -->H[iOS]
    E -->I[JSON]