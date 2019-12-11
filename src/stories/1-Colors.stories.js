import React from 'react';
import { Typography, Container, Grid} from '@material-ui/core';
import '../App.css';


export default {
  title: 'All Colors',
};
 
export const colors = () => (
  <Container maxWidth='lg'>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3} align="center">
        <div className="colour-swatch bg-main "></div>
        <Typography variant="h6" >
          Main: #251EC3
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} align="center">
      <div className="colour-swatch bg-main-light "></div>
        <Typography variant="h6" >
          Main Light: #251EC3
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} align="center">
      <div className="colour-swatch bg-secondary "></div>
        <Typography variant="h6" >
          Secondary: #251EC3
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} align="center">
      <div className="colour-swatch bg-secondary-light "></div>
        <Typography variant="h6" >
          Secondary Light: #251EC3
        </Typography>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3} align="center">
        <div className="colour-swatch bg-yellow "></div>
        <Typography variant="h6" >
          Yellow: #251EC3
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} align="center">
      <div className="colour-swatch bg-dark-blue "></div>
        <Typography variant="h6" >
         Dark Blue: #251EC3
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3} align="center">
      <div className="colour-swatch bg-grey "></div>
        <Typography variant="h6" >
          Grey: #251EC3
        </Typography>
      </Grid>
    </Grid>
  </Container> 
);