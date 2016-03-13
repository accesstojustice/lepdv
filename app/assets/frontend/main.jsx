import { Button } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <div >

      <Button bsStyle="primary" block>Safety Plans</Button>
      <Button bsStyle="primary" block>Right to Interpreter</Button>
      <Button bsStyle="primary" block>Interpretation Contact</Button>
      <Button bsStyle="danger" block>I'm Going to Court</Button>

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
