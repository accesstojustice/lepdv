import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap'

export default class ExitButton extends Component {
  static propTypes = {
    exitUrl: PropTypes.string.isRequired
  }

  render() {
    return (

      <a className="btn btn-danger"  href={this.props.exitUrl}>
        <i className="fa fa-sign-out fa-lg fa-2x fa-border"></i> Exit
        </a>

    );
  }
}

//
// <div className="clearfix">
//   <Button block="true" bsStyle="danger">
//     <span className="pull-right">
//       <i id="exitbutton" className="fa fa-sign-out fa-stack-2x"></i>
//     </span>
//     <span className="pull-left">exit</span>
//   </Button>
// </div>
