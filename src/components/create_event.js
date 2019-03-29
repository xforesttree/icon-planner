import React from 'react';
import {Icon, Typography, Grid, TextField} from '@material-ui/core';
import PropTypes from 'prop-types';
import Event from './event';

const newEvent = (props) => {
  return (
    <form>
      <TextField
        required
        id="date"
        label="Date Start"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="Date End"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  )
}

export default newEvent;
