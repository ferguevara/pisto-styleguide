import React from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { theme } from '../src/theme';
import { ThemeProvider } from '@material-ui/styles';
import { addParameters } from '@storybook/react';
import pistoTheme from './pisto-theme';

addParameters({
    options: {
      theme: pistoTheme,
    },
  });

const themeDecorator = story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>
addDecorator(themeDecorator);
// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);

