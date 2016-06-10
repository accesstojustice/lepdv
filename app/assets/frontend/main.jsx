import ReactDOM from 'react-dom';
import React from 'react';
import LandingLayout from './components/LandingLayout';

class Main extends React.Component {
  render() {
    return (
      <div>
        <LandingLayout />
      </div>

    )
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById("react")
  );
}

$(documentReady);
