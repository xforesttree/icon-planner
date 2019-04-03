import React from 'react';
import {Typography, Grid, Modal, Paper, TextField, Icon} from '@material-ui/core';
import PropTypes from 'prop-types';

  const Icons = [
    "edit", "delete"
  ]

  const CreatEventModal = (props) => {
    const { open, handleChange } = props;
    return(
      <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleChange}
    >
      <Grid container justify={"center"}>
        <Grid item xs={6}>
          <Paper>
            <form>
              <TextField
                required
                select
                id="event"
                label="Icon"
                margin="normal"
                variant="outlined"
              >{Icons.map(icon => (
                <option>
                  <Icon>icon</Icon>
                  </option>
              ))}
              </TextField>
              <TextField
                required
                id="dateStart"
                label="Date Start"
                type="date"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="dateEnd"
                label="Date End"
                type="date"
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                id="event"
                label="What's happening..."
                margin="normal"
                variant="outlined"
              />
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Modal>)
  }

export default CreatEventModal;
