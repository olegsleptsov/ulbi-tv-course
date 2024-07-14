import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@shared/config/storybook/decorators';
import {Theme} from '@shared/themes';
import {Sidebar} from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};

