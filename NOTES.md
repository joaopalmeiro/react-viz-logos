# Notes

## Development

- Install the [SVG Export](https://svgexport.io/) Chrome extension.
- `npm install`.
- `npm run storybook`.
- `npm run lint`.
- `npm run build`.
- `npm pack --dry-run`.

## Deployment

- `npm version minor` or `npm version patch` or `npm version major`.
- `git push --follow-tags`.

## Misc

> [Figma](https://www.figma.com/file/KivMb0U7MQW6vzQCrzB2o5/react-viz-logos?node-id=0%3A1)

- [Creating and publishing private packages](https://docs.npmjs.com/creating-and-publishing-private-packages) (npm).
- [Crests](https://en.wikipedia.org/wiki/Sporting_CP#Crests).
- Packages:
  - [react-nba-logos](https://github.com/ChrisKatsaras/react-nba-logos).
  - [react-nfl-logos](https://github.com/ChrisKatsaras/react-nfl-logos).
  - [react-icons](https://github.com/react-icons/react-icons).
  - [SVGO](https://github.com/svg/svgo). [UI](https://jakearchibald.github.io/svgomg/).
  - [SVGR](https://react-svgr.com/). [Playground](https://react-svgr.com/playground/).
  - [polished](https://polished.js.org/) (for style calculations).
  - [styled-components](https://styled-components.com/). `npm install --save-peer styled-components`.
  - [nanoid](https://www.npmjs.com/package/nanoid).
  - [npm-package-json-lint](https://npmpackagejsonlint.org/en/). [Rules](https://npmpackagejsonlint.org/docs/en/rules). [prefer-property-order](https://npmpackagejsonlint.org/docs/en/rules/package-json-properties/prefer-property-order).
  - [sort-package-json](https://github.com/keithamus/sort-package-json). [Rules](https://github.com/keithamus/sort-package-json/blob/master/defaultRules.md). As of version [1.5.2](https://github.com/keithamus/sort-package-json/releases/tag/v1.52.0), `scripts` are sorted unless `npm-run-all` is a dependency ([function](https://github.com/keithamus/sort-package-json/blob/v1.53.1/index.js#L142)). Sort with VS Code as an alternative, for example.
  - [better-npm-run](https://www.npmjs.com/package/better-npm-run).
  - [check-engine](https://github.com/mohlsen/check-engine).
  - [node-semver](https://github.com/npm/node-semver).
  - [svg-path-bbox](https://www.npmjs.com/package/svg-path-bbox).
  - [number-precision](https://www.npmjs.com/package/number-precision).
  - [decimal.js](https://www.npmjs.com/package/decimal.js) and [bignumber.js](https://www.npmjs.com/package/bignumber.js).
  - [Brand Logos](https://github.com/brandlogos/brandlogos).
- SVGs:
  - [Guidelines](https://github.com/simple-icons/simple-icons/blob/develop/CONTRIBUTING.md).
  - `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>` or `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>...</title>...</svg>`.
  - Scale the logo to fit the `viewBox` proportionally. This means that the logo must touch at least two sides of the `viewBox`. The logo must be centered too.
  - The logo must only contain `path` elements.
  - Figma:
    - `Main menu` (Figma logo button) > `Preferences` > Disable `Snap to pixel grid`.
    - Frame: don't `Clip content`.
    - Remove all groups (`<g>`).
    - Optional: Add the `<title>` element manually after exporting.
  - `raw` > `figma`.
- [Implement pnpm init (instead of passing through to npm init)](https://github.com/pnpm/pnpm/issues/3505) (open) issue. Current command: `pnpm init`.
- [Volta](https://github.com/volta-cli/volta):
  - [Support for pnpm](https://github.com/volta-cli/volta/issues/737) (open) issue.
  - [Documentation](https://docs.volta.sh/guide/).
  - [`volta pin`](https://docs.volta.sh/reference/pin) (for projects).
  - `volta -v` and `volta list`.
  - `volta pin node@lts`.
  - `volta pin npm`.
  - `node -v && npm -v`.
  - [Uninstall](https://docs.volta.sh/advanced/uninstall).
  - [Reason to not use `package.json`'s `engines` key?](https://github.com/volta-cli/volta/issues/355) issue.
- [Zendesk Garden](https://garden.zendesk.com/) (design system).
- `package.json` file:
  - `"name": "@GITHUBUSERNAME/component-library"`.
  - `npm install --save-peer react react-dom`. The `--save-peer` flag is not available in [npm 6](https://docs.npmjs.com/cli/v6/commands/npm-install), only from [npm 7](https://docs.npmjs.com/cli/v7/commands/npm-install).
  - Entry points:
    - `main`: CJS.
    - `module`: ES Modules.
    - `browser`: Universal Module Definition (UMD).
- CommonJS (CJS): Server-side only.
- `npx browserslist ">0.2%, not dead, not op_mini all"`.
- [`npm version`](https://docs.npmjs.com/cli/v8/commands/npm-version):
  - `npm version minor` or `npm version patch`. It adds a Git tag by default.
  - `git push --follow-tags`.
- Peer dependencies: the dependencies we expect users to provide.
- Sporting logo/crest:
  - [Wikipedia](https://en.wikipedia.org/wiki/Sporting_CP).
  - [Official website](https://scpconteudos.pt/sites/all/themes/jump/images/SVG/icon_emblema.svg).
- [`npm pack`](https://docs.npmjs.com/cli/v8/commands/npm-pack).
- [Warp](https://www.warp.dev/):
  - Terminal (built in Rust).
  - Wes Bos [Twitter thread](https://twitter.com/wesbos/status/1467939925861486599).
  - [Themes](https://github.com/warpdotdev/themes).
  - [Documentation](https://docs.warp.dev/).
  - `Settings` > `Appearance`:
    - `TERMINAL FONT`: Hack (default).
    - `FONT SIZE`: 14.
- [SVGLint](https://github.com/birjolaxew/svglint):
  - It is used by [Simple Icons](https://github.com/simple-icons/simple-icons).
  - [Default configuration](https://github.com/birjolaxew/svglint/issues/25) (open) issue.
  - `npx svglint figma/*.svg --debug`, `npx svglint raw/*svg figma/*.svg --debug`, or `npx svglint raw/*svg figma/*.svg --ci`.
  - By default it only checks if the SVG is [valid](https://github.com/birjolaxew/svglint/blob/v2.0.0/src/rules/valid.js) (more info [here](https://github.com/birjolaxew/svglint/blob/v2.0.0/src/svglint.js#L45)). In version 2.0.0, there is no default configuration (it is necessary to create a [`.svglintrc.js` file](https://github.com/birjolaxew/svglint#config)).
  - [Examples](https://github.com/birjolaxew/svglint/tree/v2.0.0/test).
- [SVG Porn](https://svgporn.com/) website.
- `.npmpackagejsonlintrc.json`:
  - `"valid-values-name-scope": ["error", ["@joaopalmeiro"]]`.
- Storybook:
  - [UI: Add external links to navigation](https://github.com/storybookjs/storybook/issues/8047) (open) issue (and [[Feature Question] Hyperlinks in sidebar?](https://github.com/storybookjs/storybook/issues/7443) issue).
  - [Storybook CLI](https://www.npmjs.com/package/@storybook/cli):
    - `npx sb init --use-npm`.
    - [CLI options](https://storybook.js.org/docs/react/api/cli-options).
  - [Default tab is always canvas on first load](https://github.com/storybookjs/storybook/issues/13128) (open) issue.
  - [Addon-backgrounds MDX support](https://github.com/storybookjs/storybook/issues/14322) (open) issue.
  - [Badge](https://github.com/storybookjs/storybook#badges--presentation-materials) ([alternative](https://github.com/storybookjs/brand)).
  - Alternative: [Docz](https://www.docz.site/).
- `yarn` === `yarn install` ([documentation](https://classic.yarnpkg.com/en/docs/cli/#toc-default-command)).
- [Chromatic](https://www.chromatic.com/):
  - `Manage` > `Automate` > Disable `UI Review` and `Visual tests`.
  - [Get permalinks to your project](https://www.chromatic.com/docs/permalinks#get-permalinks-to-your-project).
- `publish.yml`: `on: push: tags: - 'v*'`.
