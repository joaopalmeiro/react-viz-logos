const NP = require('number-precision');
const svgPathBbox = require('svg-path-bbox');
const zip = require('just-zip-it');

const logoSize = 24;

// const targetCenter = logoSize / 2;
const targetCenter = NP.divide(logoSize, 2);

// Source:
// - https://github.com/simple-icons/simple-icons/blob/6.3.0/.svglintrc.js#L17
// - https://github.com/simple-icons/simple-icons/blob/6.3.0/.svglintrc.js#L15
// const logoFloatPrecision = 3;
// const logoTolerance = 0;
const logoTolerance = 0.001;

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
      function (reporter, $, ast, info) {
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

        // [[x0, y0, x1, y1], ...] a.k.a. [[minX, minY, maxX, maxY], ...]
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

        // More info: https://anguscroll.com/just/just-zip-it
        const corners = zip(...paths);
        const boundingBox = [
          Math.min(...corners[0]),
          Math.min(...corners[1]),
          Math.max(...corners[2]),
          Math.max(...corners[3])
        ];

        // Run: npm run lint:figma > output.txt
        // console.log(info);
        // console.log(paths);
        // console.log(boundingBox);

        // More info: https://github.com/nefe/number-precision
        // console.log(NP.plus(0.1, 0.2));
        // vs.
        // console.log(0.1 + 0.2);

        const [minX, minY, maxX, maxY] = boundingBox;
        // const centerX = (minX + maxX) / 2;
        // const devianceX = centerX - targetCenter;
        // const centerY = (minY + maxY) / 2;
        // const devianceY = centerY - targetCenter;
        // const centerX = +((minX + maxX) / 2).toFixed(logoFloatPrecision);
        // const centerY = +((minY + maxY) / 2).toFixed(logoFloatPrecision);

        const centerX = NP.divide(NP.plus(minX, maxX), 2);
        const devianceX = NP.minus(centerX, targetCenter);
        const centerY = NP.divide(NP.plus(minY, maxY), 2);
        const devianceY = NP.minus(centerY, targetCenter);

        // console.log(centerX, devianceX, centerY, devianceY);
        // console.log(NP.strip(centerX), NP.strip(devianceX), NP.strip(centerY), NP.strip(devianceY));

        if (Math.abs(devianceX) > logoTolerance || Math.abs(devianceY) > logoTolerance) {
          reporter.error(
            `All <path> elements together must be centered at (${targetCenter}, ${targetCenter}); the current center is (${centerX}, ${centerY})`,
            // More info: https://github.com/birjolaxew/svglint/blob/v2.0.0/test/custom.spec.js#L125
            $.find('svg')[0],
            ast
          );
        }
      }
    ]
  }
};
