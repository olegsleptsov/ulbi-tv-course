import type {Meta, StoryObj} from '@storybook/react';
import {Link} from './Link';
import {ThemeDecorator} from '../../config/storybook/decorators';
import {Theme} from '../../themes';

const meta = {
  title: 'shared/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/'
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Link primary',
    variant: 'primary'
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Link primary',
    variant: 'primary'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const Secondary: Story = {
  args: {
    children: 'Link secondary',
    variant: 'secondary'
  },
};

export const SecondaryDark: Story = {
  args: {
    children: 'Link secondary',
    variant: 'secondary'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

