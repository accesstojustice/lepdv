import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap'

export default class ExitButton extends Component {
  static propTypes = {
    exitUrl: PropTypes.string.isRequired
  }

  render() {
    return (
      <a className="btn btn-danger animated fadeInRight"  href={this.props.exitUrl}>
        <i className="fa fa-sign-out fa-lg fa-2x fa-border"></i>
        {"  "}
          Exit
      </a>
      );
    }
  }
