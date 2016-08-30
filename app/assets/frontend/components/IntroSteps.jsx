import React, { Component, PropTypes } from 'react';

export default class IntroStep extends Component {
  static propTypes = {
    stepLead: PropTypes.string,
    stepBody: PropTypes.string.isRequired
  }
  render() {
    return (
      <li><strong>{ this.props.stepLead }</strong>{ this.props.stepBody }</li>
    );
  }
}
