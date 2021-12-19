# react-pt-football-logos

React components for Portuguese football logos/crests.

## References

### Development

- [heroicons](https://github.com/tailwindlabs/heroicons) package and its [build.js](https://github.com/tailwindlabs/heroicons/blob/master/scripts/build.js) script.
- [@heroicons/react](https://www.npmjs.com/package/@heroicons/react) package.
- [react-icon-boilerplate](https://github.com/mikunpham/react-icon-boilerplate) template and [Create your own React icons library and publish to npm automatically](https://dev.to/quanpham/create-your-own-react-icons-library-and-publish-to-npm-automatically-4i11) blog post.
- [Simple Icons](https://github.com/simple-icons/simple-icons) and its [contributing guidelines](https://github.com/simple-icons/simple-icons/blob/develop/CONTRIBUTING.md).

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
