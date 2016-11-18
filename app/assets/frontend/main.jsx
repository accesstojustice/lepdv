import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class IMLApp extends Component {
  render() {
    return (
      <div>
        <App />
      </div>
    )
  }
}

let documentReady = () => {
  ReactDOM.render(
    <IMLApp />,
    document.getElementById("react")
  )
};

$(documentReady);
