import { StoryFn } from '@storybook/react';
import { Theme } from '../../../themes';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  return (
    <div  id='app' className={`app_theme_${theme}`}>
      <Story />
    </div>
  )
}