// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import {ErrorBoundary} from '@app/providers/ErrorBoundary';
import {StoryFn} from '@storybook/react';

export const ErrorBoundaryDecorator = (Story: StoryFn) => {
  return (
    <ErrorBoundary>
      <Story />
    </ErrorBoundary>
  )
}