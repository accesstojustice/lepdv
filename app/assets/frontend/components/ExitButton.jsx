import React, { Component, PropTypes } from 'react';

export default class ExitButton extends Component {
  static propTypes = {
    exitUrl: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="exit-box">
        <a href={this.props.exitUrl} >
          <span className="fa-stack fa-5x">
            <i id="exitbutton" className="fa fa-sign-out fa-stack-2x"></i>
            <strong className="fa-stack-1x exit-text">exit</strong>
          </span>
        </a>
      </div>
    );
  }
}
