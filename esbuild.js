const esbuild = require('esbuild');
const pkg = require('./package.json');

const defaultConfig = {
  entryPoints: ['src/index.js'],
  bundle: true,
  loader: { '.js': 'jsx' },
  // https://esbuild.github.io/api/#minify
  // https://esbuild.github.io/api/#minify-considerations
  minify: true,
  target: 'es6'
};

esbuild.build({
  ...defaultConfig,
  outfile: pkg.module,
  format: 'esm'
});

esbuild.build({
  ...defaultConfig,
  outfile: pkg.main,
  format: 'cjs'
});
