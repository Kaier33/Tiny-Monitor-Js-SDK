import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: './dist/tiny-monitor-sdk.esm.js',
      format: 'es',
      name: 'TinyMonitorSdk'
    },
    {
      file: './dist/tiny-monitor-sdk.min.js',
      format: 'iife',
      name: 'TinyMonitorSdk'
    }
  ],
  plugins: [
    resolve(),
    commonjs({exclude: 'node_modules'}),
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    terser()
  ]
}
