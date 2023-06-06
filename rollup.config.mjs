import serve from "rollup-plugin-serve";
import livereload from 'rollup-plugin-livereload';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    name: 'example',
    format: 'iife',
    sourcemap: process.env.BUILD === 'development',
  },
  plugins: [
    commonjs(),
    nodeResolve({
      dedupe: ['reveal.js']
    }),
    babel({babelHelpers: 'bundled', exclude: 'node_modules/*'}),
    postcss(),
    serve({
      open: true,
      verbose: true,
      contentBase: ['', 'dist'],
      historyApiFallback: true,
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: ['', 'dist'] }),
  ]
}
