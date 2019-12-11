import React from 'react';
import { TextField} from '@material-ui/core';


export default {
  title: 'Text Field',
};

export const link = () => (
    <form noValidate autoComplete="off">
      <TextField
        label="Size"
        id="outlined-size-normal"
        defaultValue="Normal"
        variant="outlined"
      />
    </form>
  );
