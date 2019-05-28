
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

const buble = require('rollup-plugin-buble');
const typescript = require('rollup-plugin-typescript');

function resolveDir(dir){
  return path.join(__dirname, '../', dir)
}

export default {
  input: 'src/main.js',
  output:{
    file: 'util.js',
    format: 'cjs'
  },
  plugins:[
    typescript(),
    buble(),
    nodeResolve({
      jsnext: true,
      main: true
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