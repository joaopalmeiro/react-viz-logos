const svgPathBbox = require('svg-path-bbox');

// Source:
// - https://github.com/birjolaxew/svglint/tree/v2.0.0/test
// - https://github.com/simple-icons/simple-icons/blob/6.3.0/.svglintrc.js
// - https://github.com/birjolaxew/svglint/blob/v2.0.0/src/rules/elm.js
// - https://github.com/birjolaxew/svglint/blob/v2.0.0/.svglintrc.js
// - https://github.com/birjolaxew/svglint/blob/v2.0.0/test/elm.spec.js
// - https://github.com/birjolaxew/svglint/blob/v2.0.0/src/rules/attr.js
// - https://github.com/birjolaxew/svglint/blob/v2.0.0/test/attr.spec.js
// - https://github.com/birjolaxew/svglint#config
module.exports = {
  rules: {
    elm: {
      svg: 1,
      'svg > path': true,
      '*': false
    },
    attr: [
      {
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',
        'rule::selector': 'svg'
      },
      {
        // Source:
        // - https://github.com/simple-icons/simple-icons/blob/6.3.0/.svglintrc.js#L154
        // - https://github.com/simple-icons/simple-icons/blob/6.3.0/.svglintrc.js#L857
        // More info:
        // - https://regexr.com/6c4ob
        // - https://regexr.com/6c4ot
        // - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
        // d: /^[,a-zA-Z0-9\. -]+$/,
        d: /^[Mm][MmZzLlHhVvCcSsQqTtAaEe0-9-,.\s]+$/,
        fill: true,
        'rule::selector': 'svg > path',
        'rule::whitelist': true
      }
    ],
    custom: [
      function (reporter, $, ast) {
        // Source:
        // - https://github.com/simple-icons/simple-icons/blob/6.3.0/.svglintrc.js#L825
        // - https://github.com/birjolaxew/svglint/blob/v2.0.0/src/rules/custom.js
        // - https://github.com/birjolaxew/svglint/blob/v2.0.0/test/custom.spec.js
        // More info:
        // - https://cheerio.js.org/
        // - https://cheerio.js.org/classes/Cheerio.html
        // - https://github.com/birjolaxew/svglint/blob/v2.0.0/src/lib/reporter.js#L85
        // - https://github.com/birjolaxew/svglint/blob/v2.0.0/src/lib/linting.js#L88
        // - https://stackoverflow.com/a/61604230
        // - https://cheerio.js.org/classes/Cheerio.html#map
        // - https://cheerio.js.org/classes/Cheerio.html#each
        // - https://www.npmjs.com/package/svg-path-bbox
        reporter.name = 'logo-centered';

        // [[x0, y0, x1, y1], ...]
        const paths = [];

        $.find('path').each(function (i, elem) {
          paths[i] = svgPathBbox(elem.attribs.d);
        });

        // console.log($.html());
        // reporter.error($.html());

        // More info: https://developer.mozilla.org/en-US/docs/Web/API/console/dir
        // console.dir($);
        // console.dir($.find('path'));
        // console.log(paths);
      }
    ]
  }
};
