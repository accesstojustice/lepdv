import React, { Component, PropTypes } from 'react'
import Button from 'react-bootstrap'

export default class ExitButton extends Component {
  static propTypes = {
    exitUrl: PropTypes.string.isRequired
  }

  render() {
    return (
      <Button href={this.props.exitUrl}>
        <i id="exitbutton" className="fa fa-sign-out fa-stack-2x"></i> exit
      </Button>
      );
    }
  }
