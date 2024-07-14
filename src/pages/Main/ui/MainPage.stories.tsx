import type {Meta, StoryObj} from '@storybook/react';
import MainPage from './MainPage';
import {ThemeDecorator} from '@shared/config/storybook/decorators';
import {Theme} from '@shared/themes';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};


