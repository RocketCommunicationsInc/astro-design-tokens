import{D as u}from"./chunks/DesignTokenPreview.28bbc282.js";import{j as k,m as _,o as a,c as n,F as p,a as f,u as x,b as r,_ as y,r as v,i as b,d as e,e as s}from"./app.97d2605e.js";const i={props:{type:String},setup(t){const l=t,c=k(()=>_.tokens.filter(o=>o.category==="color"&&o.property===l.type&&!o.component));return(o,m)=>(a(),n("div",null,[(a(!0),n(p,null,f(x(c),(d,h)=>(a(),n("div",null,[r(u,{type:t.type,token:d},null,8,["type","token"])]))),256))]))}},T={components:{DesignTokenPreview:u},computed:{filteredTokens(){return _.tokens.filter(t=>t.category==="color"&&t.property==="classification"&&!t.component)}}};function C(t,l,c,o,m,d){const h=v("design-token-preview");return a(),n("div",null,[(a(!0),n(p,null,f(d.filteredTokens,(g,A)=>(a(),n("div",null,[r(h,{type:"background",token:g},null,8,["token"])]))),256))])}var B=y(T,[["render",C]]);const S=b("",3),V=e("h3",{id:"text",tabindex:"-1"},[s("Text "),e("a",{class:"header-anchor",href:"#text","aria-hidden":"true"},"#")],-1),D=e("h3",{id:"border",tabindex:"-1"},[s("Border "),e("a",{class:"header-anchor",href:"#border","aria-hidden":"true"},"#")],-1),N=e("h3",{id:"fill",tabindex:"-1"},[s("Fill "),e("a",{class:"header-anchor",href:"#fill","aria-hidden":"true"},"#")],-1),$=e("h3",{id:"",tabindex:"-1"},[s("---- "),e("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),F=e("h3",{id:"classification",tabindex:"-1"},[s("Classification "),e("a",{class:"header-anchor",href:"#classification","aria-hidden":"true"},"#")],-1),P=e("p",null,"Classification colors represent the government markings and are very intentionally set. Do not use these as part of your UI.",-1),E='{"title":"System Tokens","description":"","frontmatter":{},"headers":[{"level":2,"title":"Color","slug":"color"},{"level":3,"title":"Background","slug":"background"},{"level":3,"title":"Text","slug":"text"},{"level":3,"title":"Border","slug":"border"},{"level":3,"title":"Fill","slug":"fill"},{"level":3,"title":"----","slug":""},{"level":3,"title":"Classification","slug":"classification"}],"relativePath":"system.md"}',w={},L=Object.assign(w,{setup(t){return(l,c)=>(a(),n("div",null,[S,r(i,{type:"background"}),V,r(i,{type:"text"}),D,r(i,{type:"border"}),N,r(i,{type:"fill"}),$,F,P,r(B)]))}});export{E as __pageData,L as default};
