import type {Preview} from '@storybook/react';
import {StyleDecorator, ThemeDecorator} from '@shared/config/storybook/decorators';
import {Theme} from '@shared/themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT)
  ],
};

// addDecorator(StyleDecorator)

export default preview;
