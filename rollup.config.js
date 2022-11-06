import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';

import typescript from '@rollup/plugin-typescript';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: './src/index.ts',
  output: {
      sourcemap: true,
      dir: 'docs',
      entryFileNames: 'bookshelf.js'
  },
  plugins: [typescript()]
});