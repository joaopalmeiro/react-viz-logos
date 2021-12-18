# react-pt-football-logos

React components for Portuguese football logos/crests.

## References

### Development

- [heroicons](https://github.com/tailwindlabs/heroicons) package and its [build.js](https://github.com/tailwindlabs/heroicons/blob/master/scripts/build.js) script.
- [react-icon-boilerplate](https://github.com/mikunpham/react-icon-boilerplate) package and [Create your own React icons library and publish to npm automatically](https://dev.to/quanpham/create-your-own-react-icons-library-and-publish-to-npm-automatically-4i11) blog post.
- [Simple Icons](https://github.com/simple-icons/simple-icons) and its [contributing guidelines](https://github.com/simple-icons/simple-icons/blob/develop/CONTRIBUTING.md).

### Logos/Crests

- [Sporting](<https://en.wikipedia.org/wiki/File:Sporting_Clube_de_Portugal_(Logo).svg>).

## Notes

- [Creating and publishing private packages](https://docs.npmjs.com/creating-and-publishing-private-packages) (npm).
- [Crests](https://en.wikipedia.org/wiki/Sporting_CP#Crests).
- Packages:
  - [react-nba-logos](https://github.com/ChrisKatsaras/react-nba-logos).
  - [react-nfl-logos](https://github.com/ChrisKatsaras/react-nfl-logos).
  - [react-icons](https://github.com/react-icons/react-icons).
- SVGs:
  - [Guidelines](https://github.com/simple-icons/simple-icons/blob/develop/CONTRIBUTING.md).
  - `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>...</title>...</svg>`.
  - Scale the logo to fit the `viewBox` proportionally. This means that the logo must touch at least two sides of the `viewBox`. The logo must be centered too.
  - The logo must only contain `path` elements.
