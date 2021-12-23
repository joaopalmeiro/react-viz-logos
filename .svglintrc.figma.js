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
        // More info:
        // - https://regexr.com/6c4ob
        // - https://regexr.com/6c4ot
        // - https://github.com/simple-icons/simple-icons/blob/6.3.0/.svglintrc.js#L154
        // - https://github.com/simple-icons/simple-icons/blob/6.3.0/.svglintrc.js#L857
        // - https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
        // d: /^[,a-zA-Z0-9\. -]+$/,
        d: /^[Mm][MmZzLlHhVvCcSsQqTtAaEe0-9-,.\s]+$/,
        fill: true,
        'rule::selector': 'svg > path',
        'rule::whitelist': true
      }
    ]
  }
};
