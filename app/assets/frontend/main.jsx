import { Button } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return (
      <div >

      <Button bsStyle="primary" block>Multilingual Safety Plans</Button>
      <Button bsStyle="primary" block>Right to Interpreter</Button>
      <Button bsStyle="primary" block>Interpretation Contact</Button>
      <Button bsStyle="primary" block>Legal Terms</Button>
      <Button bsStyle="primary" block>I'm Going to Court</Button>


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
