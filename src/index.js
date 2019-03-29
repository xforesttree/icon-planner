import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Event from './components/event';

class App extends Component {
  render() {
    return (
      <div>
        <Event title="foo" date="30-03-2019" icon="CarIcon"/>
        <Event title="bar" date="31-03-2019" icon="TrainIcon"/>
        <Event title="Fus ro dah" date="05-04-2019" dateEnd="07-04-2019" icon="TentIcon"/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
