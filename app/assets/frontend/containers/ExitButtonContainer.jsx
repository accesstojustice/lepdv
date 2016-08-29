import React, { Component } from 'react';
import ExitButton from '../components/ExitButton';

export default class ExitButtonContainer extends Component {
  constructor(...args) {
    super(...args);
    this.state = { exitUrl: this.randomExitUrl() || '' }
  }

  randomExitUrl() {
    let urls = this.props.randomExitUrl;
    let length = this.props.randomExitUrl.length;
    return urls[Math.floor(Math.random() * length)].url;
  }

  render() {
    return (
      <ExitButton exitUrl={this.state.exitUrl}/>
    );
  }
}
