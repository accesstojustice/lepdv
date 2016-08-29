import React, { Component } from 'react';

export default class IntroStep extends Component {
  render() {
    return (
      <li><strong>{ this.props.stepLead }</strong>{ this.props.stepBody }</li>
    );
  }
}
