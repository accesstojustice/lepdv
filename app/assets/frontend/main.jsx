
import AccessOptions from './components/AccessOptions';

class Main extends React.Component {
  render() {
    return (
      <div>
        <AccessOptions />
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
