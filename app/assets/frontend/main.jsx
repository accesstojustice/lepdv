class Main extends React.Component {
  render() {
    return (
        <h2> Hi from regular Component</h2>
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
