import type {Meta, StoryObj} from '@storybook/react';

import {Loader} from './Loader';
import {ThemeDecorator} from '../../config/storybook/decorators';
import {Theme} from '../../themes';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderLight: Story = {
  args: {},
};

export const LoaderDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const FullPageLoader: Story = {
  args: {
    fullPage: true,
  },
};

export const FullPageLoaderDark: Story = {
  args: {
    fullPage: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

