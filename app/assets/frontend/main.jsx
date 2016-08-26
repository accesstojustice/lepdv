import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './components/AppLayout';

class App extends Component {
  render() {
    return (
      <div>
        <AppLayout />
      </div>
    )
  }
}

let documentReady = () => {
  ReactDOM.render(
    <App />,
    document.getElementById("react")
  )
}

$(documentReady);
