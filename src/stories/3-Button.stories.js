import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '@material-ui/core/Button';
import '../App.css';
import { StylesProvider } from "@material-ui/styles"

export default {
  title: 'Buttons',
};

export const link = () => (
    <Button onClick={action('clicked')}>
      Hello Button
    </Button>
  );

export const primary = () => (
    <Button color="primary" onClick={action('clicked')} variant="contained">
      Primary
    </Button>
);

export const secondary = () => (
    <Button color="secondary"   onClick={action('clicked')} variant="contained">
      Secondary
    </Button>
);

export const ghost = () => (
  <StylesProvider injectFirst>
    <Button className="MuiButton-Ghost" color="light" onClick={action('clicked')} variant="contained">
      ghost
    </Button>
  </ StylesProvider>
);

export const outlined = () => (
    <Button color="secondary" onClick={action('clicked')} variant="outlined">
      Outlined
    </Button>
);