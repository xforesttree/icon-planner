import React from 'react';
import {Icon, Typography, Grid, TextField} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete'
import PropTypes from 'prop-types';

const Event = (props) => {
  const {title, icon, date, dateEnd} = props;
  return (
    <Grid container alignItems={"spaceAround"} justify={"center"}>
      <Grid item xs={1}>
        <Icon>{icon}</Icon>
      </Grid>
      <Grid item xs={2}>
      {dateEnd ? <form><TextField
        id="dateStart"
        label="Date Start"
        defaultValue={date}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      /><TextField
        id="dateEnd"
        label="Date End"
        defaultValue={dateEnd}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      /></form> : <form><TextField
        id="date"
        label="Date"
        defaultValue={date}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      /></form>}
      </Grid>
      <Grid item xs={4}>
        <Typography variant="overline">{title}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Delete/>
      </Grid>
    </Grid>
  )
}

Event.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

Event.defaultProps = {
  dateEnd: null
}

export default Event;
