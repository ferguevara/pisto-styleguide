import React from 'react';
import { Grid,Card,CardContent, CardActionArea, Typography, Box} from '@material-ui/core';


function openOrders() {
  return (
        <Grid item xs={12} sm={3}>
          <Card> 
            <CardActionArea>
              <CardContent className="bg-secondary" align="center">
                <Box p={4}>
                  <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="19.5362" cy="19.4474" r="17.3929" stroke="white" stroke-width="4.06588"/>
                    <path d="M26.7637 21.2543C27.7617 21.2543 28.5707 20.4453 28.5707 19.4473C28.5707 18.4493 27.7617 17.6402 26.7637 17.6402L26.7637 21.2543ZM12.3072 17.6402C11.3092 17.6402 10.5001 18.4493 10.5001 19.4473C10.5001 20.4453 11.3092 21.2543 12.3072 21.2543L12.3072 17.6402ZM26.7637 17.6402L12.3072 17.6402L12.3072 21.2543L26.7637 21.2543L26.7637 17.6402Z" fill="white"/>
                    <path d="M21.3432 12.2192C21.3432 11.2212 20.5341 10.4122 19.5361 10.4122C18.5381 10.4122 17.7291 11.2212 17.7291 12.2192H21.3432ZM17.7291 26.6757C17.7291 27.6737 18.5381 28.4828 19.5361 28.4828C20.5341 28.4828 21.3432 27.6737 21.3432 26.6757H17.7291ZM17.7291 12.2192V26.6757H21.3432V12.2192H17.7291Z" fill="white"/>
                  </svg>
                <Typography className="white" variant="h6"> Start new order</Typography>
              </Box>
              </CardContent>
            </CardActionArea>
          </Card>
         
        </Grid>
  );
}

export default openOrders;
