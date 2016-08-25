import { Component } from 'react';

export default class ExitButton extends Component {
  constructor(...args) {
    super(...args);
    this.state = { exitUrl: this.randomExitUrl() || '' }
  }

  componentDidMount() {
    if (this.state.exitUrl.length === 0 ) {
      this.handleMouseOver();
    }
  }

  randomExitUrl() {
    let urlArray = this.props.randomExitUrl;
    let l = this.props.randomExitUrl.length
    let url = urlArray[Math.floor(Math.random() * l)].url;
    return url;
  }

  render() {
    return (
      <div className="exit-box">
        <a href={this.state.exitUrl} >
          <span className="fa-stack fa-5x">
            <i id="exitbutton" className="fa fa-sign-out fa-stack-2x"></i>
            <strong className="fa-stack-1x exit-text">exit</strong>
          </span>
        </a>
      </div>
    )
  }
}
