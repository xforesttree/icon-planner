import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import Event from './components/event';
import CreatEventModal from './components/create_event';

import './index.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  events = (data) => (
    data
    .sort(
      (a,b) => {
    return new Date(a.date).getTime() -
        new Date(b.date).getTime()
      })
      .map(
        (event) => {
      return(<Event title={event.title} date={event.date} dateEnd={event.dateEnd} icon={event.icon}/>)
    })
  );

  handleChange = () => {
    this.state.modalOpen ? this.setState({modalOpen: false}) : this.setState({modalOpen: true})
  }

  currentMonth = () => {
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
    const today = new Date();
    const month = today.getMonth();
    return monthName[month];
  }

  render() {

    const mockdata = [
      {date: "2019-08-08", title: "event 1", icon: "bookmark"},
      {date: "2019-09-05", title: "event 2", icon: "build"},
      {date: "2019-11-05", title: "A very long event with spaces and longer words in a sentence like dihydrocarboxylicoate and loooooooooooooooooooooooo ooooooooooooooooooooooooong 1", icon: "android"},
      {date: "2019-07-03", dateEnd: "2019-08-08", title: "multiday event 1", icon:"edit"},
      {date: "2019-06-18", dateEnd: "2019-08-08", title: "multiday event 2", icon:"class"},
      {date: "2019-06-06", title: "It's June", icon:"add"}
    ]

    return (
      <div>
      <h1>{this.currentMonth()}</h1>
        {this.events(mockdata)}
        <Button variant={"contained"} color={"primary"} onClick={this.handleChange}>
          Add Event
          <AddIcon/>
        </Button>
        <CreatEventModal open={this.state.modalOpen} handleChange={this.handleChange}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
