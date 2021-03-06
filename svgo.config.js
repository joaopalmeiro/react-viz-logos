module.exports = {
    multipass: true,

    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    removeViewBox: false
                }
            }
        },

        'removeDimensions',

        // Source: https://github.com/svg/svgo/blob/master/plugins/sortAttrs.js
        {
            name: 'sortAttrs',
            params: {
                xmlnsOrder: 'alphabetical'
            }
        },

        // Source: https://github.com/svg/svgo/blob/master/plugins/removeAttrs.js
        {
            name: 'removeAttrs',
            params: {
                attrs: 'svg:fill:none'
            }
        },

        // Source: https://github.com/tailwindlabs/heroicons/blob/master/svgo.solid.yaml
        {
            name: 'addAttributesToSVGElement',
            params: {
                attributes: [
                    {
                        'aria-hidden': true
                    }
                ]
            }
        }
    ]
};
