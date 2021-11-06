import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: './dist/tiny-monitor-sdk.js',
      format: 'umd',
      name: 'TinyMonitorSdk'
    }
  ],
  plugins: [
    // terser(),
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}
