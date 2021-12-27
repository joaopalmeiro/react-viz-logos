const esbuild = require('esbuild');
const pkg = require('./package.json');

// More info:
// - https://esbuild.github.io/content-types/#auto-import-for-jsx
// - `Support jsx automatic runtime` (open) issue: https://github.com/evanw/esbuild/issues/334
// - https://react-svgr.com/docs/options/#jsx-runtime
// - https://react-svgr.com/docs/options/#jsx-runtime-import-source

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
