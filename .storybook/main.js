module.exports = {
    // Source:
    // - https://stackoverflow.com/a/68097205
    // - https://storybook.js.org/docs/react/configure/overview
    stories: [
        '../src/stories/Introduction.stories.mdx',
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    framework: '@storybook/react'
};
