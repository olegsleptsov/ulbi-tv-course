import type {Meta, StoryObj} from '@storybook/react';
import AboutPage from './AboutPage';
import {ThemeDecorator} from '@shared/config/storybook/decorators';
import {Theme} from '@shared/themes';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};


