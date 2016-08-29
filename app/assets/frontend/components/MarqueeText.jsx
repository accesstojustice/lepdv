import React, { Component } from 'react';

export default class MarqueeText extends Component {
  render() {
    return(
      <li><span className="small">{this.props.body}</span></li>
    );
  }
}
