import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@shared/config/storybook/decorators';
import {Theme} from '@shared/themes';
import {NotFoundPage} from './NotFoundPage';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};


