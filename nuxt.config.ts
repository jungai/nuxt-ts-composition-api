import { Configuration } from '@nuxt/types';
import buildModules from './configs/buildModules';
import css from './configs/css';
import head from './configs/head';
import loading from './configs/loading';
import mode from './configs/mode';
import modules from './configs/modules';
import plugins from './configs/plugins';

const config: Configuration = {
  css,
  buildModules,
  head,
  loading,
  mode,
  modules,
  plugins,
};

export default config;
