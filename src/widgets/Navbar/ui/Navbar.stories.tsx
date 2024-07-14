import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@shared/config/storybook/decorators';
import {Theme} from '@shared/themes';
import {Navbar} from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};


