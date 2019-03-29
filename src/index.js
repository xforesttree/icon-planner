import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Event from './components/event';

const data =[{date: "30-03-2019", title: "foo", icon: "testIcon"}, {date: "31-03-2019", dateEnd: "05-04-2019", title: "bar", icon:"carIcon"}]

const events = (data) => (
  data.map((event) => {
    return(<Event title={event.title} date={event.date} dateEnd={event.dateEnd || null} icon={event.icon}/>)
  })
);

class App extends Component {

  render() {

    return (
      <div>
        {events(data)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
