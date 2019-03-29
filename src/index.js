import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Event from './components/event';

const data =[
  {date: "2019-03-03", title: "foo", icon: "bookmark"},
  {date: "2019-03-05", title: "test", icon: "build"},
  {date: "2019-03-05", title: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest testtesttesttest testtesttesttest testtesttesttest testtesttesttest testtesttesttest", icon: "build"},
  {date: "2019-03-08", dateEnd: "2019-08-08", title: "bar", icon:"class"},
  {date: "2019-03-08", dateEnd: "2019-08-08", title: "bar", icon:"class"}
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
        {events(data)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
