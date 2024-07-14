import type {Preview} from '@storybook/react';
import {
  ErrorBoundaryDecorator,
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator
} from '@shared/config/storybook/decorators';
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
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    ErrorBoundaryDecorator,
  ],
};

// addDecorator(StyleDecorator)

export default preview;
