import type { Preview } from '@storybook/nextjs-vite'
import React from 'react';
import DesignSystemProvider from '../src/design-system/DesignSystemProvider';

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        DesignSystemProvider,
        null,
        React.createElement(Story)
      ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;