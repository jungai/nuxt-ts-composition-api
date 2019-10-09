import { Configuration } from '@nuxt/types';

const buildModules: Configuration['buildModules'] = [
  // Doc: https://github.com/nuxt-community/eslint-module
  '@nuxtjs/eslint-module',
  // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
  '@nuxtjs/tailwindcss',
  '@nuxt/typescript-build',
];

export default buildModules;
