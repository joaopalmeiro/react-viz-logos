export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    // Source: https://github.com/storybookjs/storybook/blob/v6.4.9/addons/docs/docs/recipes.md#reordering-docs-tab-first
    previewTabs: { 'storybook/docs/panel': { index: -1 } },
    // Source: https://github.com/storybookjs/storybook/blob/v6.4.9/addons/docs/docs/recipes.md#controlling-a-storys-view-mode
    // Issue: https://github.com/storybookjs/storybook/issues/13128
    viewMode: 'docs'
};
