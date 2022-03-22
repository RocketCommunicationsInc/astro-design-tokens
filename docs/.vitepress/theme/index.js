import './tailwind.postcss'
import '../../../dist/internal/css/_colors-light.css'
import '../../../dist/css/_colors-dark.css'
import '../../../dist/css/_colors-global.css'

import DefaultTheme from 'vitepress/dist/client/theme-default'

import 'vitepress/dist/client/theme-default/styles/vars.css';
import 'vitepress/dist/client/theme-default/styles/layout.css';
import 'vitepress/dist/client/theme-default/styles/code.css';
import 'vitepress/dist/client/theme-default/styles/custom-blocks.css';
import 'vitepress/dist/client/theme-default/styles/sidebar-links.css';
import Layout from './Layout.vue';

import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue';

const theme = {
    Layout,
    NotFound
};
export default theme;


// export default { ...DefaultTheme, Layout }