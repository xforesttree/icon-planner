import React from 'react';
import {Icon, Typography, Grid} from '@material-ui/core';
import PropTypes from 'prop-types';

const event = (props) => {
  const {title, icon, date, dateEnd} = props;
  return (
    <Grid container spacing={16}>
      <Grid item xs={2}>
        {icon}
      </Grid>
      <Grid item xs={8}>
      <Typography variant="overline">{title}</Typography>
      </Grid>
      <Grid item xs={2}>
      {dateEnd ? `${date} - ${dateEnd}` : date}
      </Grid>
    </Grid>
  )
}

event.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

event.defaultProps = {
  dateEnd: null
}

export default event;
