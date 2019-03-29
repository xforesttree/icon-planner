import React from 'react';
import {Icon, Typography, Grid} from '@material-ui/core';
import Edit from '@material-ui/icons/Create'
import PropTypes from 'prop-types';

const Event = (props) => {
  const {title, icon, date, dateEnd} = props;
  return (
    <Grid container spacing={16}>
      <Grid item xs={1}>
        {icon}
      </Grid>
      <Grid item xs={2}>
      {dateEnd ? `${date} - ${dateEnd}` : date}
      </Grid>
      <Grid item xs={8}>
      <Typography variant="overline">{title}</Typography>
      </Grid>
      <Grid item>
      <Edit/>
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
