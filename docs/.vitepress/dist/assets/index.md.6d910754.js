import{_ as e,c as n,o,i as t}from"./app.d8c78a37.js";const m='{"title":"Astro Design Tokens","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction"},{"level":3,"title":"What are Design Tokens?","slug":"what-are-design-tokens"},{"level":3,"title":"Why?","slug":"why"},{"level":3,"title":"Naming Convention","slug":"naming-convention"},{"level":2,"title":"How Do I Use These?","slug":"how-do-i-use-these"},{"level":3,"title":"Reference Tokens","slug":"reference-tokens"},{"level":3,"title":"System Tokens","slug":"system-tokens"},{"level":3,"title":"Component Tokens","slug":"component-tokens"}],"relativePath":"index.md"}',s={},a=t('<h1 id="astro-design-tokens" tabindex="-1">Astro Design Tokens <a class="header-anchor" href="#astro-design-tokens" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><h3 id="what-are-design-tokens" tabindex="-1">What are Design Tokens? <a class="header-anchor" href="#what-are-design-tokens" aria-hidden="true">#</a></h3><p>Design Tokens are design decisions represented in a <code>key: value</code> format. They are the core of the Design System. They can describe everything from color to border radii to typography. They follow a consistent naming convention. They give you out of the box accessibility contrast support if used properly. They translate across all platforms.</p><h3 id="why" tabindex="-1">Why? <a class="header-anchor" href="#why" aria-hidden="true">#</a></h3><p>Our components offer off the shelf solutions for common UI patterns, but they do not encompass the whole pciture. Useful for creating your own components. Giving you the tools to create your own UIs that are consistent with the astro brand and language.</p><h3 id="naming-convention" tabindex="-1">Naming Convention <a class="header-anchor" href="#naming-convention" aria-hidden="true">#</a></h3><h2 id="how-do-i-use-these" tabindex="-1">How Do I Use These? <a class="header-anchor" href="#how-do-i-use-these" aria-hidden="true">#</a></h2><p>Astro uses three tiers of tokens.</p><h3 id="reference-tokens" tabindex="-1">Reference Tokens <a class="header-anchor" href="#reference-tokens" aria-hidden="true">#</a></h3><p>Reference Tokens are all the possible values that are available to use. You MUST not create your own colors.</p><ul><li>Internal Designers.</li><li>Developing new components.</li></ul><h3 id="system-tokens" tabindex="-1">System Tokens <a class="header-anchor" href="#system-tokens" aria-hidden="true">#</a></h3><p>System Tokens are the preferred way of interacting with the design system. They include content and meaning. All system tokens reference our reference tokens.</p><h3 id="component-tokens" tabindex="-1">Component Tokens <a class="header-anchor" href="#component-tokens" aria-hidden="true">#</a></h3><p>Component Tokens are used to describe the properties of individual components. They SHOULD NOT be used externally unless you are</p><ol><li>Unable to use to use our Figma and Web Component libraries</li><li>Creating your own library <ol><li>Windows App/QT</li><li>Themeing Bootstrap/Material</li></ol></li></ol><p>Component tokens are scoped to individual components. Useful for theme or mode switching.</p>',18),r=[a];function i(h,l,d,c,u,p){return o(),n("div",null,r)}var g=e(s,[["render",i]]);export{m as __pageData,g as default};