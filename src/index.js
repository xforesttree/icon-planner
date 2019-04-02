import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Event from './components/event';

const mockdata =[
  {date: "2019-03-03", title: "event 1", icon: "bookmark"},
  {date: "2019-03-05", title: "event 2", icon: "build"},
  {date: "2019-03-05", title: "A very long event with spaces and longer words in a sentence like dihydrocarboxylicoate and looooooooooooooooooooooooooooooooooooooooooooooooong 1", icon: "android"},
  {date: "2019-03-08", dateEnd: "2019-08-08", title: "multiday event 1", icon:"edit"},
  {date: "2019-03-08", dateEnd: "2019-08-08", title: "multiday event 2", icon:"class"}
]

const events = (data) => (
  data.map((event) => {
    return(<Event title={event.title} date={event.date} dateEnd={event.dateEnd} icon={event.icon}/>)
  })
);

class App extends Component {

  render() {

    return (
      <div>
        {events(mockdata)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
