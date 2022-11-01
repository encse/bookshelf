import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';

import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './src/index.ts',
  output: {
      sourcemap: true,
      dir: 'docs',
      entryFileNames: 'bookshelf.js'
  },
  plugins: [image(), typescript()]
});