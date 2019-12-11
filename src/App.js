import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { Typography, Button, Container, Grid, TextField} from '@material-ui/core';
import {theme} from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" component="h4" align="left">
                Buttons
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Button>
              Hello Button
            </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button color="primary" variant="contained">
              Primary
            </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button color="secondary" variant="contained"> 
              Secondary
            </Button>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button color="secondary"  variant="outlined">
              Outlined
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Typography variant="h4" component="h4" align="left">
                Inputs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
              <form noValidate autoComplete="off">
                <TextField
                  label="Size"
                  id="outlined-size-normal"
                  defaultValue="Normal"
                  variant="outlined"
                />
              </form>
          </Grid>
        </Grid>
        </Container> 
      </div>
    </ThemeProvider>
  );
}

export default App;
