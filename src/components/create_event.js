import React from 'react';
import {Grid, Modal, Paper, TextField, Icon, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

  const Icons = [
    "edit", "delete"
  ]

  const EventForm = () => (
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
          <Icon>{icon}</Icon>
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
  )

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
            {EventForm()}
            <Button
            variant="contained"
            color="secondary">
              Add another
              <AddIcon/>
            </Button>
            <Button
            variant="contained"
            color="primary">
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Modal>)
  }

export default CreatEventModal;
