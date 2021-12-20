# react-pt-football-logos

React components for Portuguese football logos/crests.

## References

### Development

- [heroicons](https://github.com/tailwindlabs/heroicons) package and its [build.js](https://github.com/tailwindlabs/heroicons/blob/master/scripts/build.js) script.
- [@heroicons/react](https://www.npmjs.com/package/@heroicons/react) package.
- [react-icon-boilerplate](https://github.com/mikunpham/react-icon-boilerplate) template and [Create your own React icons library and publish to npm automatically](https://dev.to/quanpham/create-your-own-react-icons-library-and-publish-to-npm-automatically-4i11) blog post.
- [Simple Icons](https://github.com/simple-icons/simple-icons) and its [contributing guidelines](https://github.com/simple-icons/simple-icons/blob/develop/CONTRIBUTING.md).
- [What are peer dependencies in a Node module?](https://flaviocopes.com/npm-peer-dependencies/) blog post.
- [The newline Guide to Building a Company Component Library](https://www.newline.co/courses/newline-guide-to-building-a-company-component-library) course.
- [Creating React Libraries from Scratch](https://www.newline.co/courses/creating-react-libraries-from-scratch) course.
- [Introducing Volta - it manages your Node.js versions so you don't have to](https://www.newline.co/@paigen11/introducing-volta-it-manages-your-nodejs-versions-so-you-dont-have-to--eef49522) blog post.

### Logos/Crests

> [Figma](https://www.figma.com/file/KivMb0U7MQW6vzQCrzB2o5/react-pt-football-logos?node-id=0%3A1)

- [Sporting](<https://en.wikipedia.org/wiki/File:Sporting_Clube_de_Portugal_(Logo).svg>). `sporting.svg`.

## Notes

- [Creating and publishing private packages](https://docs.npmjs.com/creating-and-publishing-private-packages) (npm).
- [Crests](https://en.wikipedia.org/wiki/Sporting_CP#Crests).
- Packages:
  - [react-nba-logos](https://github.com/ChrisKatsaras/react-nba-logos).
  - [react-nfl-logos](https://github.com/ChrisKatsaras/react-nfl-logos).
  - [react-icons](https://github.com/react-icons/react-icons).
  - [SVGO](https://github.com/svg/svgo) ([UI](https://jakearchibald.github.io/svgomg/)).
  - [SVGR](https://react-svgr.com/).
  - [polished](https://polished.js.org/) (for style calculations).
  - [styled-components](https://styled-components.com/). `npm install --save-peer styled-components`.
  - [nanoid](https://www.npmjs.com/package/nanoid).
- SVGs:
  - [Guidelines](https://github.com/simple-icons/simple-icons/blob/develop/CONTRIBUTING.md).
  - `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>...</title>...</svg>`.
  - Scale the logo to fit the `viewBox` proportionally. This means that the logo must touch at least two sides of the `viewBox`. The logo must be centered too.
  - The logo must only contain `path` elements.
  - Figma:
    - `Main menu` (Figma logo button) > `Preferences` > Disable `Snap to pixel grid`.
    - Frame: don't `Clip content`.
    - Add the `<title>` element manually after exporting.
  - `raw` > `figma`.
- [Implement pnpm init (instead of passing through to npm init)](https://github.com/pnpm/pnpm/issues/3505) (open) issue. Current command: `pnpm init`.
- [Volta](https://github.com/volta-cli/volta):
  - [Support for pnpm](https://github.com/volta-cli/volta/issues/737) (open) issue.
  - [Documentation](https://docs.volta.sh/guide/).
  - [`volta pin`](https://docs.volta.sh/reference/pin).
  - `volta -v`.
  - `volta pin node@lts`.
  - `volta pin npm`.
  - `node -v && npm -v`.
- [Zendesk Garden](https://garden.zendesk.com/) (design system).
- `package.json` file:
  - `"name": "@GITHUBUSERNAME/component-library"`.
  - `npm install --save-peer react react-dom`. The `--save-peer` flag is not available in [npm 6](https://docs.npmjs.com/cli/v6/commands/npm-install), only from [npm 7](https://docs.npmjs.com/cli/v7/commands/npm-install).
  - Entry points:
    - `main`: CJS.
    - `module`: ES Modules.
    - `browser`: Universal Module Definition (UMD).
- [Storybook CLI](https://www.npmjs.com/package/@storybook/cli):
  - `npx sb init --use-npm`.
- CommonJS (CJS): Server-side only.
- `npx browserslist ">0.2%, not dead, not op_mini all"`.
- [`npm version`](https://docs.npmjs.com/cli/v8/commands/npm-version):
  - `npm version minor` or `npm version patch`. It adds a Git tag by default.
  - `git push --follow-tags`.
- Peer dependencies: the dependencies we expect users to provide.
