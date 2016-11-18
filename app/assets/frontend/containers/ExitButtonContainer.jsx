import React, { Component, PropTypes } from 'react';
import ExitButton from '../components/ExitButton';

export default class ExitButtonContainer extends Component {
  constructor(...args) {
    super(...args);
    this.state = { exitUrl: this.randomExitUrl() || '' }
  }

  static propTypes = {
    someUrl: PropTypes.array.isRequired
  }

  randomExitUrl() {
    let urls = this.props.someUrl;
    let length = this.props.someUrl.length;
    return urls[Math.floor(Math.random() * length)].url;
  }

  render() {
    return (
      <ExitButton exitUrl={this.state.exitUrl}/>
    );
  }
}
