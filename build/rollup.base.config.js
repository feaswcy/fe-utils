
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/utils.js',
    format: 'cjs'
  },
  watch: {
    chokidar: true,
    include: 'src/**',
    exclude: 'node_modules/**'
  },
  plugins: [
    typescript(),
    nodeResolve({ // 如果不使用此插件，那么rollup只会转换import 语法，不会去外部查找模块（也就是指转换为require）
      mainFields: ['module', 'main'], // Default: ['module', 'main']
    }),
    commonjs({
      include: 'node_modules/**',  // Default: undefined
      exclude: ['node_modules/foo/**', 'node_modules/bar/**'],  // Default: undefined
      extensions: ['.js', '.ts'],  // Default: [ '.js' ]
      ignoreGlobal: false,  // Default: false
      sourceMap: false,  // Default: true
      namedExports: { './module.js': ['foo', 'bar'] },  // Default: undefined
      ignore: ['conditional-runtime-dependency']
    })
  ]
}